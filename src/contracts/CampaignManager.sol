// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IFundEscrow {
    function registerCampaign(bytes32 campaignId, address owner) external;
    function lockFunds(address token, address donor, bytes32 campaignId, uint256 amount) external returns (bool);
    function releaseFunds(address token, bytes32 campaignId, uint256 amount) external returns (bool);
    function whitelistToken(address token, bool status) external;
    function isCampaignRegistered(bytes32 campaignId) external view returns (bool);
}

contract CampaignManager is ReentrancyGuard {
    address public owner;
    IFundEscrow public fundEscrow;
    uint256 public campaignCount;

    uint256 public constant MAX_GOAL = 1000000 ether; // Set max fundraising cap
    uint256 public constant CAMPAIGN_COOLDOWN = 1 days;
    uint256 public constant MAX_CAMPAIGNS_PER_USER = 5;

    struct Campaign {
        address creator;
        string title;
        string description;
        string category;
        string image;
        uint256 goal;
        string currency;
        uint256 endDate;
        bool active;
    }

    struct Milestone {
        string title;
        uint256 fundingPercentage;
        string description;
        bool released;
    }

    mapping(bytes32 => Campaign) public campaigns;
    mapping(bytes32 => Milestone[]) public milestones;
    mapping(address => uint256) public lastCreatedAt;
    mapping(address => uint256) public activeCampaignCount;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyCampaignCreator(bytes32 id) {
        require(msg.sender == campaigns[id].creator, "Not campaign creator");
        _;
    }

    event CampaignCreated(bytes32 indexed id, address indexed creator);
    event FundsLocked(bytes32 indexed id, address token, uint256 amount);
    event FundsReleased(bytes32 indexed id, address token, uint256 amount);
    event MilestoneReleased(bytes32 indexed id, uint256 milestoneIndex);
    event CampaignDisabled(bytes32 indexed id);
    event TokenWhitelisted(address indexed token, bool status);

    constructor(address _escrowAddress) {
        require(_escrowAddress != address(0), "Invalid escrow address");
        owner = msg.sender;
        fundEscrow = IFundEscrow(_escrowAddress);
    }

    function createCampaign(
        string memory _title,
        string memory _description,
        string memory _category,
        string memory _image,
        uint256 _goal,
        string memory _currency,
        uint256 _endDate,
        Milestone[] memory _milestones
    ) external {
        require(block.timestamp >= lastCreatedAt[msg.sender] + CAMPAIGN_COOLDOWN, "Cooldown not met");
        require(activeCampaignCount[msg.sender] < MAX_CAMPAIGNS_PER_USER, "Too many active campaigns");
        require(bytes(_title).length > 0, "Title required");
        require(bytes(_description).length > 0, "Description required");
        require(bytes(_category).length > 0, "Category required");
        require(bytes(_currency).length > 0, "Currency required");
        require(_goal > 0 && _goal <= MAX_GOAL, "Invalid goal");
        require(_endDate > block.timestamp, "End date in past");
        require(_milestones.length > 0, "At least one milestone required");

        uint256 totalPercent;
        for (uint i = 0; i < _milestones.length; i++) {
            require(bytes(_milestones[i].title).length > 0, "Milestone title required");
            totalPercent += _milestones[i].fundingPercentage;
        }
        require(totalPercent == 100, "Milestone percentages must sum to 100");

        uint256 idNum = ++campaignCount;
        bytes32 id = keccak256(abi.encodePacked(msg.sender, idNum));

        campaigns[id] = Campaign({
            creator: msg.sender,
            title: _title,
            description: _description,
            category: _category,
            image: _image,
            goal: _goal,
            currency: _currency,
            endDate: _endDate,
            active: true
        });

        for (uint i = 0; i < _milestones.length; i++) {
            milestones[id].push(_milestones[i]);
        }

        fundEscrow.registerCampaign(id, msg.sender);
        emit CampaignCreated(id, msg.sender);

        lastCreatedAt[msg.sender] = block.timestamp;
        activeCampaignCount[msg.sender]++;
    }

    function donate(bytes32 campaignId, address token, uint256 amount) external nonReentrant {
        Campaign storage c = campaigns[campaignId];
        require(c.active, "Inactive campaign");
        require(amount > 0, "Amount must be > 0");
        require(fundEscrow.isCampaignRegistered(campaignId), "Not registered in escrow");

        bool success = fundEscrow.lockFunds(token, msg.sender, campaignId, amount);
        require(success, "Lock failed");

        emit FundsLocked(campaignId, token, amount);
    }

    function releaseMilestoneFunds(bytes32 campaignId, address token, uint256 milestoneIndex) external onlyCampaignCreator(campaignId) nonReentrant {
        Milestone storage m = milestones[campaignId][milestoneIndex];
        require(!m.released, "Milestone already released");

        Campaign storage c = campaigns[campaignId];
        uint256 amount = (c.goal * m.fundingPercentage) / 100;

        bool success = fundEscrow.releaseFunds(token, campaignId, amount);
        require(success, "Release failed");

        m.released = true;

        emit FundsReleased(campaignId, token, amount);
        emit MilestoneReleased(campaignId, milestoneIndex);
    }

    function disableCampaign(bytes32 id) external onlyCampaignCreator(id) {
        campaigns[id].active = false;
        activeCampaignCount[msg.sender]--;
        emit CampaignDisabled(id);
    }

    function whitelistToken(address token, bool status) external onlyOwner {
        require(token != address(0), "Invalid token");
        fundEscrow.whitelistToken(token, status);
        emit TokenWhitelisted(token, status);
    }
}
