import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Paper, TextField } from '@mui/material';
import { useState,useEffect } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useSS from '../../Hooks/useSS';
import '../../App.css'
import { SSNbox } from '../../Components/SSNbox';

const SSPage = () => {
    const[name,setName] = useState('')
    const[ssn,setSSN] = useState('');
    const[dob,setDob] = useState('')
    const{entities} = useSS();


    const stop = (event) => {
        event.preventDefault();
    }
   const addPerson = async() => {
       const response = await entities.people.add({
            name:name,
            ssn:ssn,
            dob:dob
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
        <div className='ssForm'>
            <Paper>
            <div className='ssAdd'>
            <form onSubmit={stop}>
                <h3>Add a New Person</h3>
                <Row>
                    <Col md = "6" xs = "12">
                        <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                    </Col>
                    <Col md = "6" xs = "12">
                        <TextField
                        id="date"
                        label="Date of Birth"
                        type="date"
                        onChange={(e) => setDob(e.target.value)} required
                        sx={{ width: 200 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
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
export default SSPage