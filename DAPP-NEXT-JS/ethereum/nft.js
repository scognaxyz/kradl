import web3 from './web3';
import NFT from './build/kradlFactoryNFT.json';

export default (address) => {
    return new web3.eth.Contract(
        NFT.abi,
        address
    );
};