import React,{ useState,useRef, useEffect } from 'react';
import Head from 'next/head'
import { Card, CardDescription } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../../../styles/cards.module.css';




export default function ToDoList() {
    const [nfts, setNfts] = useState([])
    const didFetchRef = useRef(false)
  
    useEffect(() => {
      if (didFetchRef.current === false) {
        didFetchRef.current = true
        fetchProjects()
      }
    }, [])
  
    async function fetchProjects() {
      let path = '/projects/nfts'
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)
      const json = await res.json()
      setNfts(json)
    }
    function renderContests() {
        console.log(nfts);
        
        const items = nfts.map(id =>{
            return {
                content:[
                    <h3 className={styles.header}><a style={{color : 'black'}}>{id.title}</a></h3>,
                    <img style={{ marginLeft: '13px' , marginRight: '13px'}} src={id.image}/>,
                    <div style={{ marginLeft: '13px', marginRight: '13px', fontSize: '13px', fontWeight: 'normal', color: 'grey', marginTop: '14px'}}>Description</div>,
                    <p style={{ marginLeft: '13px' , marginRight: '13px', fontWeight: 'normal', color: 'black',fontSize: '9px', marginTop: '0px', lineHeight:'13px'}}>{id.description}</p>
                    ]}
               });

        return <Card.Group centered items={items}/>;
    }
        
     {return (<div>{renderContests()}</div>);}
  }