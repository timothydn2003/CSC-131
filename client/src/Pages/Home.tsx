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

export type Status = 'error' | 'warning' | 'uninitialized' |'success'

const Home = () => {
    const[num,setNum] = useState("");
    const[ssn,setSSN] = useState("");
    const[alert ,setAlert]  = useState<Status>('uninitialized')
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
                    <Match num={ssn} />
                    <Container>
                        <Row>
                            <Col md="4" xs="12">
                                <DMV num={ssn} />
                            </Col>
                            <Col md="4" xs="12">
                                <SS num={ssn} />
                            </Col>
                            <Col md="4" xs="12">
                                <DOS num={ssn} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Home