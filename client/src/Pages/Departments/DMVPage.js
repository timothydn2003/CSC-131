import { useState, useEffect } from 'react'
import useDMV from '../../Hooks/useDMV'
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import { Button, Paper, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import '../../App.css'
import { Link } from 'react-router-dom';
import {SSNbox} from "../../Components/SSNbox"



const DMVPage = () => {
    const {entities} = useDMV();
    const[name,setName] = useState('')
    const[dl,setDL] = useState('')
    const[dob,setDOB] = useState('')
    const[ssn,setSSN] = useState('')
    const[image,setImage] = useState('')

    const stop = (event) => {
        event.preventDefault();
    }
    const addPerson = async() => {
        const response = await entities.people.add({
             name:name,
             ssn:ssn,
             dob:dob,
             image:image,
             dl:dl
        },
        {
            aclInput:{
                acl: [
                    {
                        principal: {
                            nodes: ['*'],
                        },
                        path: "dob",
                        operations: ['READ'],
                    },
                ],
            },
        },
        {
            syncMode: 'ASYNC'
         },
        )
    }
    
    useEffect(() => {
        const unsubscribe = entities.people.onAdd((data) => {
            alert(`${data.result.name} has been added!`);
        })
        return () => unsubscribe();
    },[])
    return(
        <div className='dmvForm'>
          <Paper>
           <div className='add'>
           <form onSubmit={stop}>
                <div className='header'>
                <h3>Add a New Person</h3>
                <Link to={'/UpdateDMV'}>
                   <Button variant='outlined' style={{fontSize: '10px'}}>Update a Person</Button>
               </Link>
                </div>
                <Row>
                    <Col md = "6" xs = "12">
                        <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                    </Col>
                    <Col md = "6" xs = "12">
                        <TextField
                        id="date"
                        label="Date of Birth"
                        type="date"
                        onChange={(e) => setDOB(e.target.value)} required
                        sx={{ width: 200 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md = "6" xs = "12">
                        <TextField id="filled-basic" label="Drivers License Number" variant="filled" onChange={(e) => setDL(e.target.value)} required/>
                    </Col>
                    <Col md = "6" xs = "12">
                        <TextField id="filled-basic" label="Picture" variant="filled" onChange={(e) => setImage(e.target.value)} type = 'url' required/>
                    </Col>
                </Row>
                <Row>
                    <Col md = "6" xs = "12">
                        <SSNbox values={ssn} setValues={setSSN}/>  
                    </Col>
                    <Col md = "6" xs = "12">
                        <Button 
                        disableElevation
                        id='submit-btn' 
                        variant='contained'
                        color='success'
                        size='large'
                        style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                                textTransform: "capitalize"}}
                        onClick={addPerson} 
                        type='submit'>Add Person
                        <PersonAddIcon/>
                        </Button>
                    </Col>
                </Row>
            </form>
            </div>
          </Paper>
        </div>
    )
}
export default DMVPage