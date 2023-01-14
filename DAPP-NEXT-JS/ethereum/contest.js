import web3 from './web3';
import Contest from './build/Contest.json';

export default (address) => {
    return new web3.eth.Contract(
        Contest.abi,
        address
    );
};