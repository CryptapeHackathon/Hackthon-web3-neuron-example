// You can also use this one to deploy contract.
// but I don't know how to do it.


const SERVER = 'localhost:1337';
const web3 = NervosWeb3.default(SERVER);

const tx = {
  from: '0x0438BFcaBdDa99c00aCF0039e6c1F3F2d78EDde5',
  privkey: '0x6df169367e91caab0f63120aeb296fce34fd21e95dedd635f2d0cce3f5c8e47f',
  nonce: 'ELH1A3',
  chainId: 1,
  validUntilBlock: 3300,
  data: '6060604052341561000f57600080fd5b60d38061001d6000396000f3006060604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806360fe47b114604e5780636d4ce63c14606e575b600080fd5b3415605857600080fd5b606c60048080359060200190919050506094565b005b3415607857600080fd5b607e609e565b6040518082815260200191505060405180910390f35b8060008190555050565b600080549050905600a165627a7a723058202d9a0979adf6bf48461f24200e635bc19cd1786efbcfc0608eb1d76114d405860029',
  version: 0,
  value: 0,
  quota: 1000000
};

// method sendTransaction
web3.eth.sendTransaction(tx).then(console.log)

// method sendSignedTransaction
const signed = web3.cita.sign(tx)
web3.eth.sendSignedTransaction(signed).then(console.log)