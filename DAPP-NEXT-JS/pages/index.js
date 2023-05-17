import React,{ useState,useRef, useEffect } from 'react';
import Head from 'next/head'
import { Card, CardDescription } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import styles from '../styles/cards.module.css';




export default function ToDoList() {
    const [projects, setProjects] = useState([])
    const didFetchRef = useRef(false)
  
    useEffect(() => {
      if (didFetchRef.current === false) {
        didFetchRef.current = true
        fetchProjects()
      }
    }, [])
  
    async function fetchProjects() {
      let path = '/projects'
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + path)
      const json = await res.json()
      setProjects(json)
    }
    function renderContests() {
        console.log(projects);
        
        const items = projects.map(id =>{
            return {
                content:[
                    <h3 className={styles.header}><a style={{color : 'black'}}>{id.header}</a></h3>,
                    <div className={styles.meta}>Contest Rules</div>,
                    <p style={{ marginLeft: '13px' , marginRight: '13px', fontWeight: 'normal', color: 'black',fontSize: '9px', marginTop: '0px', lineHeight:'13px',marginBottom: '14px'}}>{id.rules}</p>,
                    <img style={{ marginLeft: '13px' , marginRight: '13px'}} src={id.pic}/>,
                    <div style={{ marginLeft: '13px', marginRight: '13px', fontSize: '13px', fontWeight: 'normal', color: 'grey', marginTop: '14px'}}>Description</div>,
                    <p style={{ marginLeft: '13px' , marginRight: '13px', fontWeight: 'normal', color: 'black',fontSize: '9px', marginTop: '0px', lineHeight:'13px'}}>{id.description}</p>,
                    <p style={{ marginLeft: '13px' , marginRight: '13px', fontWeight: 'normal', color: 'blue',fontSize: '7px', marginTop: '0px', marginBottom: '12px'}}><a>{id.address_contest}</a></p>]
                    }
               });

        return <Card.Group centered items={items}/>;
    }
        
     {return (<div>{renderContests()}</div>);}
}