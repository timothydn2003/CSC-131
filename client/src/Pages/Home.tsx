import { useState } from 'react'
import '../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { validSSN } from '../regex.js';
import DMV from '../Components/DMV.js';
import DOS from '../Components/DOS.js';
import SS from '../Components/SS.js';
import { SSNsearchBox } from '../Components/HomepageSearchBox';
import * as React from 'react';
import useFetchDMV from "../Hooks/useFetchDMV";
import useFetchDOS from '../Hooks/useFetchDOS';
import useFetchSS from '../Hooks/useFetchSS';
import { Button, Modal} from '@mui/material';
import Box from '@mui/material/Box';


export type Status = 'error' | 'warning' | 'uninitialized' |'success'

const Home = () => {
    const{dmvList} = useFetchDMV();
    const{dosList} = useFetchDOS();
    const{ssList} = useFetchSS()
    const[num,setNum] = useState("");
    const[ssn,setSSN] = useState("");
    const[alert ,setAlert]  = useState<Status>('uninitialized')
    const[dmvName,setDMVName] = useState<string>("")
    const[dmvDOB, setdmvDOB] = useState("");
    const[dosName,setDOSName] = useState<string>("")
    const[dosDOB, setdosDOB] = useState("");
    const[ssName, setSSName] = useState<string>("");
    const[ssDOB, setSSDOB] = useState("");
    const[matches,setMatches] = useState(false)
    const[show,setShow] = useState(false)
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)
    const[showButton, setShowButton] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 570,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        height: 200
      };

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
            if(data.ssn === num){
                setDMVName(data.name)
                setdmvDOB(data.dob)
            }
        })
        dosList.map((data) => {
            if(data.ssn === num){
                setDOSName(data.name)
                setdosDOB(data.dob)
            }
        })
        ssList.map((data) => {
            if(data.ssn === num){
                setSSName(data.name)
                setSSDOB(data.dob)
            }
        })
        setShowButton(true);
    }

    const check = () => {
        setMatches(false)
        if(dmvName === dosName && dosName === ssName && dmvDOB === dosDOB && dosDOB === ssDOB){
            setMatches(true);
        }
        console.log(matches)
        handleOpen()
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
                    <Container>
                        <Row>
                            <Col>
                           {showButton? 
                           <Button 
                                disableElevation
                                variant='contained'
                                color='inherit'
                                size='large'
                                style={{ borderRadius: "10px",padding: ".5rem",
                                        textTransform: "capitalize", marginBottom: "20px"}}
                                onClick= {check}                        
                                >Data Matching
                            </Button>: ""}
                            </Col>
                        </Row>
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
                <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                ><Box sx={style}>
                    <div className='match-message'>
                        {matches? <h1 style={{color: "green"}}>Data Matches</h1>: <h1 style={{color: "red"}}>Data Does Not Match</h1>}
                    </div>
                </Box>
                    
            </Modal>
            </div>
        </div>
    )
}
export default Home