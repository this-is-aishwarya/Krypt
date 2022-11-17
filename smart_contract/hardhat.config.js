//https://eth-goerli.g.alchemy.com/v2/PHEyDk422N7IvD0xy9wpBcOZbp3jmzxT

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/PHEyDk422N7IvD0xy9wpBcOZbp3jmzxT',
      accounts: ['46bfff7e809dc206a63dfaad48126a8645c2f7fb7db61be2e8ce75ae32ffe70e']
    }
  }
};
