import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import AddImageForm from '../../../components/AddImageForm';
import Contest from '../../../ethereum/contest';
import styles from '../../../styles/addImageForm.module.css';
import web3 from '../../../ethereum/web3'


class addImage extends Component {
    
    state = {
        pic: null
    }

    static async getInitialProps(props) {
        const contest = props.query.address

        console.log(contest)
        return{contest};
    }

    handleFile(e) {

        let file = e.target.files[0]
        console.log(e.target.files[0])

        this.setState({pic: file})


    }

    onSubmit = async (event) => {
        event.preventDefault();
        const contract = Contest(this.props.contest)

        //check tokenBalance

        const accounts = await web3.eth.getAccounts();
        await contract.methods.addImage().call()

    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className={styles.subdiv}>
                <h3 className={styles.title}>Image</h3>
                <h4 className={styles.meta}>Uploand an image that rapresents your project.</h4>
                <label className={styles.label2} for='file-input'><img className={styles.image} src='http://127.0.0.1:2999/white-image.png' ></img></label>
                <input className={styles.inputImage} value="" onChange={(e)=>this.handleFile(e)} id='file-input' type="file"  ></input><br></br>
                <h4 className={styles.fileAdmitted}>File type supported. JPG,PNG</h4>{/*hover and manina*/}
                </div>
                <button type='submit'>Submit</button>
            </form>
            </div>
        );
    }

}

export default addImage;