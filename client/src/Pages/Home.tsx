import { useState, useEffect } from 'react'
import '../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { validSSN } from '../regex.js';
import DMV from '../Components/DMV.js';
import DOS from '../Components/DOS.js';
import SS from '../Components/SS.js';
import Match from '../Components/Match.js';
import { SSNsearchBox } from '../Components/HomepageSearchBox';
import * as React from 'react';
import useFetchDMV from "../Hooks/useFetchDMV";
import useFetchDOS from '../Hooks/useFetchDOS';
import useFetchSS from '../Hooks/useFetchSS';

export type Status = 'error' | 'warning' | 'uninitialized' |'success'

const Home = () => {
    const{dmvList} = useFetchDMV();
    const{dosList} = useFetchDOS();
    const{ssList} = useFetchSS()
    const[num,setNum] = useState("");
    const[ssn,setSSN] = useState("");
    const[alert ,setAlert]  = useState<Status>('uninitialized')
    const[dmvName,setDMVName] = useState<string>("")
    const[dosName,setDOSName] = useState<string>("")
    const[ssName, setSSName] = useState<string>("");

    //declaring states
    const validate = () => {
        if (!validSSN.test(num)) {
           setAlert('error');
        }
        else{
            setAlert('uninitialized')
        }
    };
     //returns an error message if SSN is entered incorrectly
    
     const set = () => {
        setSSN(num)
        ssList.map((data) => {
            if(data.ssn === ssn){
                setDMVName(data.name)
            }
        })
        dosList.map((data) => {
            if(data.ssn === ssn){
                setDOSName(data.name)
            }
        })
        ssList.map((data) => {
            if(data.ssn === ssn){
                setSSName(data.name)
            }
        })
    }
    return(
        <div className='home'>
            <div className='content'>
                <SSNsearchBox
                    values={num}
                    setValues={setNum}
                    onclick={() => { validate(); set(); }}
                    alertStat={alert}
                />
                <div className='data'>
                    <Match dmvName = {dmvName} dosName = {dosName} ssName = {ssName} />
                    <Container>
                        <Row>
                            <Col md="4" xs="12">
                                <DMV num={ssn} dmvList = {dmvList} />
                            </Col>
                            <Col md="4" xs="12">
                                <SS num={ssn} ssList = {ssList} />
                            </Col>
                            <Col md="4" xs="12">
                                <DOS num={ssn} dosList = {dosList} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Home