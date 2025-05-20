// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTRewards is ERC721URIStorage, Ownable {
    uint256 public tokenIdCounter;
    mapping(address => uint256[]) public donorToNFTs;

    // Maintain a list of approved donors
    mapping(address => bool) public approvedDonors;

    event NFTMinted(address indexed donor, uint256 tokenId);

    // Constructor should initialize Ownable with msg.sender
    constructor() ERC721("FundHubNFT", "FHNFT") Ownable(msg.sender) {}

    // Modifier to ensure only approved donors can receive an NFT
    modifier onlyApprovedDonor(address donor) {
        require(approvedDonors[donor], "Donor not approved");
        _;
    }

    function mintMilestoneNFT(address donor, string memory metadataURI) external onlyOwner onlyApprovedDonor(donor) returns (uint256) {
        uint256 newId = ++tokenIdCounter;
        _safeMint(donor, newId);
        _setTokenURI(newId, metadataURI);
        donorToNFTs[donor].push(newId);

        // Emit event for transparency
        emit NFTMinted(donor, newId);
        
        return newId;
    }

    function getNFTsByDonor(address donor) external view returns (uint256[] memory) {
        return donorToNFTs[donor];
    }

    // Function to approve donors
    function approveDonor(address donor) external onlyOwner {
        approvedDonors[donor] = true;
    }

    // Function to remove approval of a donor
    function removeDonorApproval(address donor) external onlyOwner {
        approvedDonors[donor] = false;
    }
}
