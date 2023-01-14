const path = require('path')
const fs = require ('fs-extra')
const solc = require ('solc');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
//remove file in build directory

const campaignPath = path.resolve(__dirname,'contracts','Contest.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const input = {language: "Solidity",sources: {"Contest.sol": {content: source, },},settings: {outputSelection: { "*": {"*": ["*"],},},},};
const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[ "Contest.sol"];

fs.ensureDirSync(buildPath);

for (let contract in output) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(":", "") + ".json"),
      output[contract]
    );
  }
