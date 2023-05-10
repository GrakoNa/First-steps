const { task } = require("hardhat/config");

task("block-number", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber(); // "()" - for retriving value
    console.log(`Current block number: ${blockNumber}`);
  }
);
module.exports = {};
