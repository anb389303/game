// import Web3 object to interact with wallet provider
// for testing the truffle develop provider is used -> Port 9545
// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

// to interact with metamask change provider to currentProvider
var catchCoinContract,web3=new Web3(web3.currentProvider),contractAddress="0xc0cd71790E2ad0A82976BC712DEf3045177fe9a8";function mintAfterGame(t){web3.eth.requestAccounts().then(function(e){console.log("accounts"),console.log(e[0]),mintToAddrAfterGame(e[0],t)})}function mintToAddrAfterGame(t,e){catchCoinContract.methods.mint(t,e).send({from:t}).on("receipt",t=>{alert("Transaction Successful")})}$(document).ready(function(){window.ethereum.enable().then(function(t){catchCoinContract=new web3.eth.Contract(abi,contractAddress)})});
