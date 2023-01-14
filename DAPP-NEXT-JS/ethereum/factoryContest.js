import web3 from "./web3";
import kradlFactoryContest from "./build/kradlFactoryContest.json";
 
const instance = new web3.eth.Contract(
  kradlFactoryContest.abi,
  "0xe49954226AEEdF4b25de1c711A96c329a723c05E"
);
 
export default instance;