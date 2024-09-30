const { task } = require('hardhat/config');
require('dotenv').config({ path: './.env.local' });

require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const privateKey = process.env.PRIVATE_KEY.startsWith('0x')
  ? process.env.PRIVATE_KEY.slice(2)
  : process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [privateKey]
    }
  }
};
