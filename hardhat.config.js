/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY, API_URL } = process.env;

module.exports = {
  solidity: "0.8.17",

  networks: {
    hardhat: {},
    defaultNetwork: {
      url: 'goerli',
    },
    goerli: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
