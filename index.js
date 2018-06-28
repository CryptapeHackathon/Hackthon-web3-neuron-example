const server = 'http://47.97.108.229:1337'
function init() {

    const div = document.getElementById('info')

    console.log('Web3 exist :' + (typeof web3 !== 'undefined'))
    if (typeof web3 !== 'undefined') {  
      web3 = NervosWeb3(web3.currentProvider)
      console.log('Web Injected')
      div.innerHTML = 'Web Injected';
    } else {
      web3 = NervosWeb3(server)
      console.log('Web3 Initialized')
      div.innerHTML = 'Web Initialized';
    }

    const sendETHButton = document.getElementById('send_eth')
    sendETHButton.addEventListener('click', sendETHTransaction)

    const sendCITAButton = document.getElementById('send_cita')
    sendCITAButton.addEventListener('click', sendAppChainTransaction)

    const signButton = document.getElementById('sign')
    signButton.addEventListener('click', signTransaction)

    const setValueButton = document.getElementById('setValue')
    setValueButton.addEventListener('click', Call_setValue)

    const getValueButton = document.getElementById('getValue')
    getValueButton.addEventListener('click', Call_getValue)

}


function Call_setValue() {
    var tx_setValue = {
        from: '0x9F0C6BdD25c9A2D0E7d99CD76183fa51d4e19b1D',
        to: '0x2cc18375F32a98EfC017D1dDEBCEBD6F9Ee75152',
        nonce: 100,
        quota: 100,
        data: '0x2cc18375F32a98EfC017D1dDEBCEBD6F9Ee75152',
        // value: "10000000000000000000",
        chainId: 1,
        version: 0
      }
    contract_abi = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"str","type":"string"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
    contract_address = '0x7508d7d62608f332e53f49a1025f60d8da065e36';
    var myContract = new web3.eth.Contract(contract_abi,contract_address)
    myContract.methods.setValue('helloworld').send(tx_setValue).then(console.log);
}

function Call_getValue() {
    var tx_setValue = {
        from: '0x9F0C6BdD25c9A2D0E7d99CD76183fa51d4e19b1D',
        to: '0x2cc18375F32a98EfC017D1dDEBCEBD6F9Ee75152',
        nonce: 100,
        quota: 100,
        data: '0x2cc18375F32a98EfC017D1dDEBCEBD6F9Ee75152',
        // value: "10000000000000000000",
        chainId: 1,
        version: 0
      }
    contract_abi = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"str","type":"string"}],"name":"setValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
    contract_address = '0x7508d7d62608f332e53f49a1025f60d8da065e36';
    var myContract = new web3.eth.Contract(contract_abi,contract_address)
    myContract.methods.getValue().call().then(function (response){div.innerHTML = 'Successed';})
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
