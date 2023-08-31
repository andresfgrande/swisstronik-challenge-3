// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MySwissToken is ERC20 {
    constructor() ERC20("MySwissToken", "MST") {
        _mint(msg.sender, 420 * 10 ** decimals());
    }
}
