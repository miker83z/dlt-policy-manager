const { generateSmartContractSpecification } = require('./lib/generator');
const { OffChainStorage } = require('./lib/offChainStorage');
const { EthereumDeployer } = require('./lib/eth/deployer');
const { EthereumParser } = require('./lib/eth/parser');

module.exports = {
  generateSmartContractSpecification,
  OffChainStorage,
  EthereumDeployer,
  EthereumParser,
};
