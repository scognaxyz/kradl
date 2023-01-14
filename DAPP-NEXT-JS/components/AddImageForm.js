import React,{Component, useState} from 'react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/addImageForm.module.css'


export default function addImageForm(){

const [pic, setPic] = useState()

    return(
        <div>
            <form>
                <div className={styles.subdiv}>
                <h3 className={styles.title}>Image</h3>
                <h4 className={styles.meta}>Uploand an image that rapresents your project.</h4>
                <label className={styles.label2} for='file-input'><img className={styles.image} src='http://127.0.0.1:2999/white-image.png' ></img></label>
                <input className={styles.inputImage} value={pic} onChange={event=>setPic({ pic: event.target.files[0]})} id='file-input' type="file"  ></input><br></br>
                <h4 className={styles.fileAdmitted}>File type supported. JPG,PNG</h4>{/*hover and manina*/}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
        )
}