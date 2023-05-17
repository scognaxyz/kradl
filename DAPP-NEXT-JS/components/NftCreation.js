import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import NFT from '../ethereum/nft';
import styles from '../styles/addImageForm.module.css';
import web3 from '../ethereum/web3';
import axios from 'axios';

class NftCreation extends Component {
    constructor(props){
        super(props)
    }
    state = {
        errorMessage:'',
        recipient: ''
    }

    onChange = (e) => {
        this.setState({recipient: e.target.value})
    }

    onSubmit = async (event) =>{
        event.preventDefault();
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/${this.props.addressContest}`)
        const project = await res.json()
        const address_factory = project.address_factory
        let callOk = true
        console.log(address_factory)
        try{
            const accounts = await web3.eth.getAccounts()
            const contract = NFT(address_factory)
            await contract.methods.mintNFT(this.state.recipient,this.props.tokenUri).send({
                from: accounts[0]
            })
        } catch (err){
            callOk = false
            console.log(err)
            this.setState({errorMessage: err.message})
        }

        if (callOk){
            try {
                console.log(this.props.dataForDB)
                const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/add-image`, {
                    method: 'POST',
                    body: this.props.dataForDB
                    })
                } catch (err) {
                    console.log(err)
                    this.setState({errorMessage: err.message})
                }
        }
    }

    render() {
        return(
        <div>
            <h4>This is your token URI. It's a unique string that identifies your file on ipfs. You can see the JSON file of you NFT  at this link -https://gateway.pinata.cloud/ipfs/{this.props.tokenUri}- and the image uploaded on IPFS at this link -https://gateway.pinata.cloud/ipfs/{this.props.CID} </h4>
            <h4>To create your NFT click the button</h4>
            <form onSubmit={this.onSubmit}>
                <h4>Insert the address you wanna receive NFT</h4>
                <input value={this.state.recipient} onChange={this.onChange}></input>
            <button type='submit' >Submit</button>
            </form>
        </div>)
    }
}
export default NftCreation;