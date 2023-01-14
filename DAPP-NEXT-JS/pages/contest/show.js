import React, { Component } from 'react';
import {withRouter} from 'next/router'



const Index = () => {
    const router = withRouter()
    const {id} = router.query
    console.log(router.query);
  
    return(<div>{id}</div>)
  }

export default Index