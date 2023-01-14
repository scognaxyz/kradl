import React, {Component } from 'react';
import { useState} from 'react';
import {Button, Form, Image,Grid,Card} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import factoryContest from '../ethereum/factoryContest';
import web3 from '../ethereum/web3';
import styles from '../styles/contestForm.module.css';

export default function contestForm()  {

    const [projects, setProjects] = useState([]);
    const [projectName, setProjectName] = useState('');
    const [ticker, setTicker] = useState('');
    const [contestTime, setContestTime] = useState('');
    const [contestPrize, setContestPrize] = useState('');
    const [projectTokenAddress, setProjectTokenAddress] = useState('');
    const [minimumTokenHolders, setMinimumTokenHolders] = useState('');
    const [description, setDescription] = useState('');
    const [immagine, setImmagine] = useState(null);

   const handleFile = async (e) => {

        let file = e.target.files[0]
        setImmagine(file);
    }


   async function onSubmit(event) {
        event.preventDefault();

        console.log(contestPrize)

         const photo = new FormData();
         photo.append("file", immagine, immagine.name);


        // console.log(immagine)
        // console.log(photo)

        
        // const accounts = await web3.eth.getAccounts()
        // await factoryContest.methods
        // .deploy(contestTime,projectTokenAddress,contestPrize,minimumTokenHolders,projectName,ticker)
        // .send({
        //     from: accounts[0],
        //     value: contestPrize
        // });
        
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/projects/`, {
            method: 'POST',
            body: ( JSON.stringify({
                header: projectName,
                rules: contestPrize,
                description: description,
                address: projectTokenAddress,
            }),photo),
             headers: {
               'Content-Type': 'application/json',
              
            }
            
          })
          console.log(res.photo)
          if (res.ok) {
            const json = await res.json();
            const copy = [...projects, json]
            setProjects(copy)
          }

    }




    return (    <div>      
                    <form onSubmit={onSubmit}>
                        <div className={styles.maindiv}>
                            
                            <div className={styles.subdiv1}>
                                
                                
                                    <h3 className={styles.title}>Image</h3>
                                    <h4 className={styles.meta}>Uploand an image that rapresents your project.</h4>
                                    <label className={styles.label2} htmlFor='file-input'><img className={styles.image} src='http://127.0.0.1:2999/white-image.png' ></img></label>
                                    <input className={styles.inputImage} onChange={handleFile} id='file-input' type="file"  ></input><br></br>
                                    <h4 className={styles.fileAdmitted}>File type supported. JPG,PNG</h4>{/*hover and manina*/}
                                    
                                
                            </div>
                            
                            <div className={styles.subdiv2}>
                            
                                <h3 className={styles.title}>Description</h3>
                                <input className={styles.input1}  type="text" value={description} onChange={event=>setDescription(event.target.value)}  placeholder='Describe your project in few lines'></input><br></br>

                                    {/*<Form.TextArea  value={description} onChange={event=>this.setState({ description: event.target.value})}  placeholder='Describe your project in few lines'></Form.TextArea>*/}
                            
                                <div className={styles.maindiv2}>
                                    <div className={styles.subdiv}>
                                        
                                            <h3 className={styles.title}>Project Name</h3>
                                            <input className={styles.input2} value={projectName} onChange={event=>setProjectName(event.target.value)} />
                                        
                                            <h3 className={styles.title}>Contest Time</h3>
                                            <input className={styles.input2} value={contestTime} onChange={event=>setContestTime( event.target.value)} placeholder='Seconds' /> {/*add minute and hours in label*/}
                                       
                                            <h3 className={styles.title}>Project Address</h3>
                                            <input className={styles.input2} value={projectTokenAddress} onChange={event=>setProjectTokenAddress(event.target.value)}  placeholder='0x1kd4....' />
                                        
                                    </div>
                                    <div className={styles.subdiv}>
                                        
                                            <h3 className={styles.title}>Ticker</h3>
                                            <input className={styles.input2} value={ticker} onChange={event=>setTicker(event.target.value)}  placeholder='Symbol' />
                                        
                                            <h3 className={styles.title}>Contest Prize</h3>
                                            <input className={styles.input2} value={contestPrize} onChange={event=>setContestPrize(event.target.value)}  placeholder='Ether' />
                                        
                                            <h3 className={styles.title}>Minimum Token Holder</h3>
                                            <input className={styles.input2} value={minimumTokenHolders} onChange={event=>setMinimumTokenHolders( event.target.value)}  placeholder='Minimum token holder has to hold to partecipate in contest and vote' />
                                        
                                    </div>
                                </div>
                                <button className={styles.button}  type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

            //      <Form onSubmit={onSubmit}>
            //      <Grid columns={2}>
            //          <Grid.Row stretched>
                         
            //              <Grid.Column width={7} style={{paddingLeft: '14%'}}>
            //                  <Form.Field >
                                 
            //                      <h3 className={styles.title}>Image</h3>
            //                      <h4 className={styles.meta}>Uploand an image that rapresents your project.</h4>
            //                      <label className={styles.label2} for='file-input'><img className={styles.image} src='http://127.0.0.1:2999/white-image.png' ></img></label>
            //                      <input className={styles.inputImage} value={pic} onChange={event=>setPic({ pic: event.target.files[0]})} id='file-input' type="file"  ></input>
            //                      <h4 className={styles.fileAdmitted}>File type supported. JPG,PNG</h4>{/*hover and manina*/}
                                 
            //                  </Form.Field>
            //              </Grid.Column>
                         
            //              <Grid.Column  style={{ paddingRight: '7%'}}>
            //                  <Form.Field  >
            //                      <h3 className={styles.title}>Description</h3>
            //                      <input value={description} onChange={event=>setDescription(event.target.value)}  placeholder='Describe your project in few lines'></input>
            //                      {/*<Form.TextArea  value={description} onChange={event=>this.setState({ description: event.target.value})}  placeholder='Describe your project in few lines'></Form.TextArea>*/}
            //                  </Form.Field>
            //                  <Grid columns={2} >
            //                      <Grid.Column>
            //                          <Form.Field>
            //                              <h3 className={styles.title}>Project Name</h3>
            //                              <input  value={projectName} onChange={event=>setProjectName(event.target.value)} />
            //                          </Form.Field>
            //                          <Form.Field>
            //                              <h3 className={styles.title}>Contest Time</h3>
            //                              <input  value={contestTime} onChange={event=>setContestTime( event.target.value)} placeholder='Seconds' /> {/*add minute and hours in label*/}
            //                          </Form.Field>
            //                          <Form.Field>
            //                              <h3 className={styles.title}>Project Address</h3>
            //                              <input  value={projectTokenAddress} onChange={event=>setProjectTokenAddress(event.target.value)}  placeholder='0x1kd4....' />
            //                          </Form.Field>
            //                      </Grid.Column>
            //                      <Grid.Column>
            //                          <Form.Field>
            //                              <h3 className={styles.title}>Ticker</h3>
            //                              <input  value={ticker} onChange={event=>setTicker(event.target.value)}  placeholder='Symbol' />
            //                          </Form.Field>
            //                          <Form.Field>
            //                              <h3 className={styles.title}>Contest Prize</h3>
            //                              <input  value={contestPrize} onChange={event=>setContestPrize(event.target.value)}  placeholder='Ether' />
            //                          </Form.Field>
            //                          <Form.Field>
            //                              <h3 className={styles.title}>Minimum Token Holder</h3>
            //                              <input  value={minimumTokenHolders} onChange={event=>setMinimumTokenHolders( event.target.value)}  placeholder='Minimum token holder has to hold to partecipate in contest and vote' />
            //                          </Form.Field>
            //                      </Grid.Column>
            //                  </Grid>
            //                  <button className={styles.button}  type='submit'>Submit</button>
            //              </Grid.Column>
            //          </Grid.Row>
            //      </Grid>
            //  </Form>            
        )
    }



