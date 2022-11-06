require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: '.env' });

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL; 
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_HTTP_URL,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
    }
  }
};
