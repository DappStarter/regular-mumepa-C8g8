require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth remind pumpkin grace loan equal gas'; 
let testAccounts = [
"0xaf23a780812a19e842dfbbab7c36f0e85ea8bf58dc24cee097dd4320f056da26",
"0x95894ae2ce2ead32b6d7dbe2fe2989d95afa2e0e50257e3451c3802cf420fb89",
"0x70b09b7fb38bcf02b0d03687eb2300819af292fff8cc790c9a50ee06ef0989a6",
"0x73f007ea1ab34cf189855ed6328e6043e40169dd896a8c553439f97f64f9bcbb",
"0xb0bec01a283830349fc394d23157b7ff11f6496d58dd0c10600e34417885a35b",
"0x3fdf873314721788d13a5ab603617b89cfec82f89ccc7e0b06685b716a81d645",
"0xd26f1aabfb037a2fb794a49674e6b8118ee359762eb26469d9a96391c8ede4bf",
"0xc7d4195cf0946de75d53a2bb69d613b58847f630c49f41eafbb7390fd486cfb0",
"0x5d3633b4fd811fa547f03d852096907e4d62ba9cd5d12a2bb74e41ee9c223415",
"0x9181fee1e89a0d8880d3145f70123cae45e2657267472ba9ce9a105ce0df852b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

