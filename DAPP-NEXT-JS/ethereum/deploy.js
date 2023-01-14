const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledKradlFactoryContest = require("./build/kradlFactoryContest.json");
 
const provider = new HDWalletProvider(
    'punch move mammal element about stamp trial blame cluster teach ostrich jungle',
    'https://goerli.infura.io/v3/0d5df9b5d2f84aed83480e20929193ff'
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log("Attempting to deploy from account", accounts[0]);
 
  const result = await new web3.eth.Contract(compiledKradlFactoryContest.abi)
    .deploy({ data: compiledKradlFactoryContest.evm.bytecode.object })
    .send({ gas: "7000000", from: accounts[0] });
 
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();