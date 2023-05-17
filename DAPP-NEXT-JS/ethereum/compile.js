const path = require('path')
const fs = require ('fs-extra')
const solc = require ('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
//remove file in build directory

const campaignPath1 = path.resolve(__dirname,'contracts','Contest.sol');
const source = fs.readFileSync(campaignPath1, 'utf8');
const input = {language: "Solidity",sources: {"Contest.sol": {content: source, },},settings: {outputSelection: { "*": {"*": ["*"],},},},};
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[ "Contest.sol"];

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(":", "") + ".json"),
      output[contract]
    );
  }

const campaignPath2 = path.resolve(__dirname,'contracts','kradlFactoryNFT.sol');
const source2 = fs.readFileSync(campaignPath2, 'utf8');
const input2 = {language: "Solidity",sources: {"kradlFactoryNFT.sol": {content: source2, },},settings: {outputSelection: { "*": {"*": ["*"],},},},};
const output2 = JSON.parse(solc.compile(JSON.stringify(input2))).contracts["kradlFactoryNFT.sol"];

for (let contract in output2) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}