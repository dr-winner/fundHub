// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract FundEscrow is ReentrancyGuard {
    using SafeERC20 for IERC20;

    address public owner;

    mapping(bytes32 => address) public campaignOwners;
    mapping(address => bool) public whitelistedTokens;
    mapping(bytes32 => mapping(address => uint256)) public lockedFunds;

    event CampaignRegistered(bytes32 indexed id, address indexed owner);
    event FundsLocked(bytes32 indexed id, address indexed token, address indexed donor, uint256 amount);
    event FundsReleased(bytes32 indexed id, address indexed token, uint256 amount);
    event TokenWhitelisted(address indexed token, bool status);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    modifier onlyCampaignOwner(bytes32 id) {
        require(campaignOwners[id] == msg.sender, "Not campaign owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerCampaign(bytes32 id, address creator) external {
        require(campaignOwners[id] == address(0), "Campaign already registered");
        require(creator != address(0), "Invalid creator");
        campaignOwners[id] = creator;
        emit CampaignRegistered(id, creator);
    }

    function lockFunds(
        address token,
        address donor,
        bytes32 campaignId,
        uint256 amount
    ) external nonReentrant returns (bool) {
        require(campaignOwners[campaignId] != address(0), "Unregistered campaign");
        require(whitelistedTokens[token], "Token not allowed");
        require(amount > 0, "Invalid amount");

        IERC20(token).safeTransferFrom(donor, address(this), amount);
        lockedFunds[campaignId][token] += amount;

        emit FundsLocked(campaignId, token, donor, amount);
        return true;
    }

    function releaseFunds(
        address token,
        bytes32 campaignId,
        uint256 amount
    ) external nonReentrant onlyCampaignOwner(campaignId) returns (bool) {
        require(amount > 0, "Invalid amount");
        uint256 balance = lockedFunds[campaignId][token];
        require(balance >= amount, "Insufficient funds");

        lockedFunds[campaignId][token] -= amount;
        IERC20(token).safeTransfer(msg.sender, amount);

        emit FundsReleased(campaignId, token, amount);
        return true;
    }

    function whitelistToken(address token, bool status) external onlyOwner {
        require(token != address(0), "Invalid token");
        whitelistedTokens[token] = status;
        emit TokenWhitelisted(token, status);
    }

    function isCampaignRegistered(bytes32 campaignId) external view returns (bool) {
        return campaignOwners[campaignId] != address(0);
    }
}
