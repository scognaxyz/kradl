import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import Contest from '../ethereum/contest';
import styles from '../styles/addImageForm.module.css';
import web3 from '../ethereum/web3'
import axios from 'axios'


class addImage extends Component {
    
    constructor(props) {
        super(props)
    }

    state = {
        image: null,
        title: '',
        description: '',
        errorMessage: '',
        tokenURI:'',
        CID:''
        
    }

    handleFile = (e) => {
        let file = e.target.files[0]
        this.setState({image: file})
        
    }

    handleChangeTitle = (event) =>{
        this.setState({title: event.target.value})
       
    }

    handleChangeDescription = (e) =>{
        this.setState({description: e.target.value})
       
    }
    checkTokens = async (gg) => {
        const contract = Contest(this.props.addressContest)
        const accounts = await web3.eth.getAccounts();
        await contract.methods.checkTokenBalance().send({
             from: accounts[0]
        })
    }

    onSubmit = async (event) => {
        event.preventDefault();


        const data = new FormData();
        data.append('file',this.state.image);

        const metadata = JSON.stringify({name: `${this.state.title}`,});
          data.append('pinataMetadata', metadata);
          
        const options = JSON.stringify({cidVersion: 0,})
          data.append('pinataOptions', options);

        const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmYjIwNGQ2MS0zM2NlLTRjYTktODU5YS0wNTZlOTlhN2I2MDciLCJlbWFpbCI6InNjb2duYW1pZ2xpb2ZyYW5jZXNjbzE5OTZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjhkNjE3YzgzMGU0ZDE1OWZiZTZlIiwic2NvcGVkS2V5U2VjcmV0IjoiOTFiYTMxN2ZjMjEwNTQ3ZWE4MzMxMjc1MzliYWRkOWE4ZTUwNmZlZmFlNTc2Nzc3MzMyOTJlZjEyYzE0YzI0YyIsImlhdCI6MTY3Mzg1ODY3OH0.6ihszihFBtXX3-xcN6XCzpW_uvbPC9x0vdYdD8Yy8jU'
        let callOk = true
        let call2Ok = true
        let tokenURI
        let CID = ""
        //ragionare sull'ordine delle funzioni
        try {
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", data, {
            maxBodyLength: "Infinity",
            headers: {
              'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
              Authorization: JWT
            }})
        CID = res.data.IpfsHash
        
        
        const contract = Contest(this.props.addressContest)
        const accounts = await web3.eth.getAccounts();
        await contract.methods.addImage().send({
                 from: accounts[0]
            })
        } catch(err) {
            callOk = false
            console.log(err)
            this.setState({errorMessage: err.message})
        }

        

        if(callOk) {
            try {
                console.log(CID)
                var json = JSON.stringify({
                    "pinataOptions": {
                      "cidVersion": 1
                    },
                    "pinataMetadata": {
                      "name": `JSON${this.state.title}`,
                      "keyvalues": {
                        "title": "Asset Metadata",//?
                        "type": "object",//?
                        "properties": `{
                            "name": {
                                "type": "string",
                                "description": "${this.state.title}"
                            },
                            "description": {
                                "type": "string",
                                "description": "${this.state.description}"
                            },
                            "image": {
                                "type": "string",
                                "description": "ipfs://${CID}"
                            }
                        }`
                    }//risolvere questo problema
                    },
                    "pinataContent": {
                          "title": "Asset Metadata",//?
                          "type": "object",//?
                          "properties": `{
                              "name": {
                                  "type": "string",
                                  "description": "${this.state.title}"
                              },
                              "description": {
                                  "type": "string",
                                  "description": "${this.state.description}"
                              },
                              "image": {
                                  "type": "string",
                                  "description": "ìpfs://${CID}"
                              }
                            }`
                    }
                      
                  });
                  
                var config = {
                    method: 'post',
                    url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                    headers: { 
                      'Content-Type': 'application/json', 
                      'Authorization': JWT
                    },
                    data : json
                  };
                  
                const res2 = await axios(config);
                tokenURI = res2.data.IpfsHash 
                
            } catch (err) {
                call2Ok = false
                console.log(err)
                this.setState({errorMessage: err.message})
            }
            if(call2Ok) {
                const dataForDB = new FormData();
                dataForDB.append('image',this.state.image);
                dataForDB.append('title',this.state.title);
                dataForDB.append('description',this.state.description);
                this.props.onUpdateDataForDB(dataForDB)
                this.props.onUpdateTokenUri(tokenURI)
                this.props.onUpdateCID(CID)
                this.props.onUpdateUriReceived()
                // try {
                //     const dataForDB = new FormData();
                //     dataForDB.append('image',this.state.image);
                //     dataForDB.append('title',this.state.title);
                //     dataForDB.append('description',this.state.description);
        
                //     const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/add-image`, {
                //         method: 'POST',
                //         body: dataForDB
                //         })
                // } catch (err) {
                //     call3Ok = false
                //     console.log(err)
                //     this.setState({errorMessage: err.message})
                // }
    
        }
    }
}

    render () {
        return (
            <div>
                <label>Check if you are an holder</label>
                <button type='submit' onClick={this.checkTokens}>CHECK</button>
                <form onSubmit={this.onSubmit}>
                <div className={styles.subdiv}>
                <h3 className={styles.title}>Image</h3>
                <h4 className={styles.meta}>Uploand an image that rapresents your project.</h4>
                <label className={styles.label2} htmlFor='file-input'><img className={styles.image} ></img></label>
                <input className={styles.inputImage} value="" onChange={this.handleFile} id='file-input' type="file"  ></input><br></br>
                <input value={this.state.title} onChange={this.handleChangeTitle}></input>
                <input value={this.state.description} onChange={this.handleChangeDescription}></input>
                <h4 className={styles.fileAdmitted}>File type supported. JPG,PNG</h4>{/*hover and manina*/}
                </div>
                <button type='submit'>Submit</button>
            </form>
            </div>
        );
    }

}

export default addImage;