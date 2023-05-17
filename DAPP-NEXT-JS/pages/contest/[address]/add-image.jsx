import React,{Component, useState,useRef, useEffect} from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import AddImageForm from '../../../components/AddImageForm';
import NftCreation from '../../../components/NftCreation';


class createNft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uriReceived: false,
            tokenUri:'',
            CID: '',
            dataForDB: null
        }
    }
    static async getInitialProps(props) {
        const contest = props.query.address
        
        return{contest};
    }

    updateUriReceived = () => {
        this.setState({uriReceived: true})
    }

    updateTokenUri = (URI) => {
        this.setState({tokenUri: URI})
    }

    updateCID = (cid) => {
        this.setState({CID: cid})
    }

    updatedataForDB = (db) => {
        this.setState({dataForDB: db})
    }

    render(){
        let component;
        if (this.state.uriReceived) {
            component = <NftCreation CID={this.state.CID} tokenUri={this.state.tokenUri} dataForDB={this.state.dataForDB} addressContest={this.props.contest}/>
        } else {
            component = <AddImageForm onUpdateDataForDB={this.updatedataForDB} addressContest={this.props.contest} onUpdateUriReceived={this.updateUriReceived} onUpdateTokenUri={this.updateTokenUri} onUpdateCID={this.updateCID}/>
        }
        return(<div>{component}</div>)
    }
}
export default createNft;