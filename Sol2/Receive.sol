// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
 

contract Receive {
    uint currentBalance;

    
    function receiveFunds () external payable { 
        (msg.value); 
        currentBalance = currentBalance + msg.value;
    }
    function getBalance () public view returns (uint256) { 
        return currentBalance; 
    }

    function withdrawFundsBack (address payable _to) external { 
       _to.transfer (currentBalance); 
       currentBalance = 0; 
    }
}
