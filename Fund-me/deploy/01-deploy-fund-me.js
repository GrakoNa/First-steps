//import
//maain function
//calling of main function

const { network } = require("hardhat");
const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");

// function deployFunc(hre) {
//   console.log("Hi!");
//   hre.getNamedAccounts();
//   hre.deployments
// }

// module.exports.default = deployFunc; // alternative is below

// module.exports = async (hre) => {
//   const { getNamedAccounts, deploymets } = hre;
// };

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  let ethUsdPriceFeedAddress;
  //   if (developmentChains.includes(network.name)) {
  if (chainId == 31337) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  }
  //   const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
  const FundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUsdPriceFeedAddress],
    log: true,
  });
  log("-------------------------------");
};
module.exports.tags = ["all", "fundme"];
