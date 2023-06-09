// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract SimpleSrotage {
    uint256 favoriteNumber;
    
    mapping (string => uint256) public nameToFavoriteNumber; 

    struct People {
        uint256 favoriteNumber;
        string name; 
    }

    People[] public people;

    function store (uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber;
        
    } 
    function addPerson (string memory _name, uint256 _favoriteNumber) public { 
        people.push(People(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;
    } 

    function retrieve() public view returns(uint256) { 
        return favoriteNumber;
        }

}

