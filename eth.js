// import Web3 object to interact with wallet provider
// for testing the truffle develop provider is used -> Port 9545
// web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

// to interact with metamask change provider to currentProvider
var web3 = new Web3(web3.currentProvider);
var catchCoinContract;
var contractAddress = "0xC9B9dB04B98a5B5C26b975FbF278e77208EBdE24";

$(document).ready(function() {
  // to enabel accounts (trough metamask) and create Contract instance
  window.ethereum.enable().then(function(accounts) {
    catchCoinContract = new web3.eth.Contract(
      abi, contractAddress
    );
  })

});

// funciton to mint tokens after Gameover
function mintAfterGame(nrOfTokens) {
  web3.eth.requestAccounts().then(
      function(accounts) {
        console.log("accounts");
        console.log(accounts[0]);
        mintToAddrAfterGame(accounts[0],nrOfTokens);
      }
  );

}

function mintToAddrAfterGame(address,nrOfTokens){
   catchCoinContract.methods.mint(address, nrOfTokens)
  .send(
    {from:address}
  )
  .on('receipt', receipt => {
    alert("Transaktion complete");
  });
}
