// SPDX-License-Identifier: MIT License
pragma solidity ^0.8.0;

constant Fallback {
    uint256 public result;

    receive() external payable {
        result = 1;
    }

    fallback() external payable {
        result = 2;
    }
 }
