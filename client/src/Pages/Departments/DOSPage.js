import useDOS from "../../Hooks/useDOS"
import { useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { Button, Paper, TextField } from '@mui/material';
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import '../../App.css'


const DOSPage = () => {
    const{entities} = useDOS();
    const[name,setName] = useState('')
    const[passport,setPassport] = useState('')
    const[passportExpir,setPassportExpir] = useState('')
    const[dob,setDOB] = useState('')
    const[ssn,setSSN] = useState('')
    const[image,setImage] = useState('')

    const addPerson = async() => {
        const response = await entities.people.add({
            name:name,
            ssn:ssn,
            dob:dob,
            dosImage:image,
            passportnumber:passport,
            passportexpiration: passportExpir
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
    const stop = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        const unsubscribe = entities.people.onAdd((data) => {
            alert(`${data.result.name} has been added!`);
        })
        return () => unsubscribe();
    },[])

    return(
        <Paper style={{width: "500px",  margin: "20vh auto 0 auto"}}>
        <div className="dosForm">
            <form onSubmit={stop}>
                <div className="header">
                    <h3>Add a New Person</h3>
                    <Link to={'/UpdateDepartmentOfState'}>
                        <Button variant='outlined' style={{fontSize: '10px'}}>Update a Person</Button>
                    </Link>
                </div>
                <Row>
                    <Col md = '6' xs = '12'>
                        <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                    </Col>
                    <Col md = '6' xs = '12'>
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
                    <Col md = '6' xs = '12'>
                        <TextField id="filled-basic" label="Passport Number" variant="filled" onChange={(e) => setPassport(e.target.value)} required/>
                    </Col>
                    <Col md = '6' xs = '12'>
                    <TextField
                        id="date"
                        label="Passport Expiration"
                        type="date"
                        onChange={(e) => setPassportExpir(e.target.value)} required
                        sx={{ width: 200 }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md = '6' xs = '12'>
                        <TextField id="filled-basic" label="SSN" variant="filled" onChange={(e) => setSSN(e.target.value)} required/>
                    </Col>
                    <Col md = '6' xs = '12'>
                        <TextField id="filled-basic" label="Picture" variant="filled" onChange={(e) => setImage(e.target.value)} type='url' required/>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
    )
}
export default DOSPage