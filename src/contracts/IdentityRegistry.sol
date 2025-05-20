// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract IdentityRegistry {
    mapping(address => bool) public isVerified;
    mapping(address => string) public kycHash; // Off-chain hash (e.g., from IPFS or zk system)

    event UserVerified(address indexed user, string kycHash);

    function verifyUser(address user, string memory _kycHash) external {
        require(bytes(_kycHash).length > 10, "Invalid hash");
        isVerified[user] = true;
        kycHash[user] = _kycHash;
        emit UserVerified(user, _kycHash);
    }

    function isUserVerified(address user) external view returns (bool) {
        return isVerified[user];
    }
}
