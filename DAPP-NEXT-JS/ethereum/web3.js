import Web3 from "web3";
 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);// window.ethereum is the copy of web3 injected by metamask
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/0d5df9b5d2f84aed83480e20929193ff"//the next.js server need a provider to execute the file
  );
  web3 = new Web3(provider);
}
 
export default web3;
//this file is executed two times, on the server and then in the browser to make the reload faster
// window is not defined because is a global variable defined in browser and our server is going to render the entire dapp on a next.js(node.js) server