// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract FunctionsAndErrors {
    uint public Odd;

    function requireOdd(uint number) external {
        require(number % 2 == 1, "You inputted Even");
        ++Odd;
    }

    function assertOdd(uint number) external {
        assert(number % 2 == 1);
        ++Odd;
    }

    function revertOdd(uint number) external {
        if (number % 2 == 0) {
            revert("You inputted even");
        }
        ++Odd;
    }
}