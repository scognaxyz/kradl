import React,{Component, useState,useRef, useEffect} from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import factoryContest from '../../ethereum/factoryContest';
import ContestForm from '../../components/ContestForm';


export default function createContest() {
    return(<div><ContestForm></ContestForm></div>)
}