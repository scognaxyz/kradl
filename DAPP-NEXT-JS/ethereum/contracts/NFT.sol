//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "DAPP-NEXT-JS/node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "DAPP-NEXT-JS/node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "DAPP-NEXT-JS/node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "DAPP-NEXT-JS/node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract kradlFactoryNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;

    constructor(string memory name, string memory symbol) ERC721( name, symbol) {}

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
    
}
