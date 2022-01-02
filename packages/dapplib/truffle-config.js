require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note soap coconut grace lonely equal genius'; 
let testAccounts = [
"0x17c86f60ef89854b5bf0a9ae604cb10d9ade9afb462930e30a7d97e475280a28",
"0xb2381f5e195db277a44c54975e741368803bc129d8b09f4ab32fa5ffa3318d72",
"0xa3fce9a466c113eb330365d9db3d2fbc6f808c84e9821c2d9389769a076220ad",
"0xdf2758f4f843f13784fdbbe01a32bd704824a0290526f9b0a566d827137fd5c6",
"0x4816a4dee83e74156a657b2930c018c51fb68ea581807ad95ce6bc83b3e01d20",
"0xabc735a8697378c125d122f9dae03a8aa56ed2332974669046909be3705135eb",
"0x352ab4f7f0ac055329034b188037c7f62c162454030ca0742cd038df26f1b34e",
"0x004740ace9f31a1a750c8a236ee84636e21ff28b0e66d9ceda3883db67aa6847",
"0x2c7aae2af09ff867e916c2b77cf58272f43d76d50168559930ef710c425d35ad",
"0xb3010e04da29dd35140a711e610847645c41c8843eab2c14db3d1182c4b34252"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

