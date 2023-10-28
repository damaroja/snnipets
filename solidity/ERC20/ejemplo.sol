
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "./erc20.sol";


contract Palomitas is ERC20{
    constructor() ERC20("Palomitas", "PL"){}

    function createTokens() public {
        mint(msg.sender, 1000);
    }
}
