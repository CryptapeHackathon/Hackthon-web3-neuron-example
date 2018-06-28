const server = 'http://47.94.105.230:1337'
function init() {

    const div = document.getElementById('info')
    console.log('Web3 exist :' + (typeof web3 !== 'undefined'))
    if (typeof web3 !== 'undefined') {  
      web3 = CITAWeb3(web3.currentProvider)
      console.log('Web Injected')
      div.innerHTML = 'Web Injected';
    } else {
      web3 = CITAWeb3(server)
      console.log('Web3 Initialized')
      div.innerHTML = 'Web Initialized';
    }

    const sendETHButton = document.getElementById('send_eth')
    sendETHButton.addEventListener('click', sendETHTransaction)

    const sendCITAButton = document.getElementById('send_cita')
    sendCITAButton.addEventListener('click', sendAppChainTransaction)

    const signButton = document.getElementById('sign')
    signButton.addEventListener('click', signTransaction)

}

var tx_eth = {
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gasLimit": "0x76c0", 
  "gasPrice": "0x5AF3107A4", 
  "value": "100000000000000000", 
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8"
}

function sendETHTransaction() {
  web3.eth.sendTransaction(tx_eth, function(err, res){
    console.log(res)
  })
}

var tx_appchain = {
  to: '0x2cc18375F32a98EfC017D1dDEBCEBD6F9Ee75152',
  nonce: 100,
  quota: 100,
  data: '0x2cc18375F32a98EfC017D1dDEBCEBD6F9Ee75152',
  value: "10000000000000000000",
  chainId: 1,
  version: 0
}

function sendAppChainTransaction() {
  web3.eth.sendTransaction(tx_appchain, function(err, res){
    console.log(res)
  })
  
}

function cancelled() {
    console.log("transaction cancel");
}

function onSignSuccessful(hash) {
    console.log("transaction hash: " + hash);
}

function onSignFail(err) {
    console.log("transaction err: " + err);
}

function signTransaction() {
  web3.eth.signTransaction(tx_appchain, function(err, res) {
    if (!err) {
      console.log(res)
    }
  })
}




window.onload = init()
