require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/07-Vnx569uQg3BCe4bFSahlvzTgUsBS4',
      accounts: ['68fa33957436ae1ba9ee42cb645ee5ecf4b43864964a0d84b5d55cb7650e4507'],
    },
  },
};

//https://eth-goerli.g.alchemy.com/v2/07-Vnx569uQg3BCe4bFSahlvzTgUsBS4