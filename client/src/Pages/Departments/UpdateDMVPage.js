import useDMV from '../../Hooks/useDMV'
import { useState,useEffect } from 'react'
import { Button, TextField } from '@mui/material';
import '../../App.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';


const UpdateDMVPage = () => {
    const[people,setPeople] = useState([])
    const[person,setPerson] = useState({})
    const[name,setName] = useState('')
    const[dl,setDL] = useState('')
    const[image,setImage] = useState('')
    const[show,setShow] = useState(false)
    const{entities} = useDMV();

    useEffect(() => {
        async function getDMV(){
            const response = await entities.people.list();
            setPeople(response.items)
        }
        getDMV()
    })
    const stop = (event) => {
        event.preventDefault();
    }
    const findPerson = () =>{
        people.map((data) => {
            if(data.name === name){
                setPerson(data)
                setShow(true)
            }
        })
    }
    return(
        <div className='updateDMV'>
            <Link to={'/DMV'}>
                <Button>Add a New Person</Button>
            </Link>
            <form onSubmit={stop}>
                <Row>
                    <Col md = '6'>
                    <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                    </Col>
                    <Col md = '6'>
                    <Button 
                        disableElevation
                        id='submit-btn' 
                        variant='contained'
                        color='success'
                        size='large'
                        style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                                textTransform: "capitalize"}}                        
                        onClick = {findPerson}
                        type='submit'> Search for Person

                        <PersonSearchRoundedIcon/>
                        </Button>
                    </Col>
                </Row>
            </form>
                <h1>{person.ssn}</h1>
        </div>
    )
}
export default UpdateDMVPage