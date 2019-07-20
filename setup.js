const Web3 = require('web3'); 
const client = require('node-rest-client-promise').Client();
const Infura_key = "your_infura_key_here"; // Insert Infura key here. 


const Etherscan_api_key  = "your_secret_etherscan_key";
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/'  +  'your_infura_key_here');

const Contract_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const etherescan_url = `http://api.etherscan.io/api?module=contract&action=getabi&address=${Contract_address}&apikey=${Etherscan_key_api}`

async function getContractAbi() {
    const etherescan_response = await client.getPromise(etherescan_url)
    const Contract_abi = JSON.parse(etherescan_response.data.result);
    return Contract_abi;
}

async function eventQuery(){
const Contract_abi = getContractAbi();
const contract = new web3.eth.Contract(Contract_abi, Contract_address); 
}

eventQuery();