import useDMV from '../../Hooks/useDMV'
import { useState,useEffect } from 'react'
import { Button, Paper, TextField} from '@mui/material';
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
    const updatePerson = async() => {
        const response = await entities.people.update({
            _id: person._id,
            image:image,
            dl: dl
        })
        entities.people.onUpdate((data) => {
            alert(`An existing product named ${data.result.name} has been updated!`);
          });
    }
    return(
        <div className='updateDMV'>
            <Paper style={{width: "420px", padding: ".8rem", height: "200px"}}>
            <div>
            <h3>Update a New Person</h3>
            <Link to={'/DMV'}>
                <Button variant='outlined' style={{fontSize: '10px'}}>Add New Person</Button>
            </Link>
            </div>
            <form onSubmit={stop}>
                <Row>
                    <Col md = '6'>
                        <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} style={{top: "30px"}}required/>
                    </Col>
                    <Col md = '6'>
                    <Button 
                        disableElevation
                        id='submit-btn' 
                        variant='contained'
                        color='success'
                        size='large'
                        style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                                textTransform: "capitalize", top: "310px"}}                        
                        onClick = {findPerson}
                        type='submit'> Search for Person

                        <PersonSearchRoundedIcon/>
                        </Button>
                    </Col>
                </Row>
            </form>
                {show? <div className='updateDMV-form'>
                    <form onSubmit={stop}>
                        <h3>Update: <span>{person.name}</span></h3>
                        <Row>
                            <Col md = '6' xs = '12'>
                                <TextField id="filled-basic" label="Updated DL Number" variant="filled" onChange={(e) => setDL(e.target.value)} required/>
                            </Col>
                            <Col md = '6' xs = '12'>
                                <TextField id="filled-basic" label="Updated Image" variant="filled" onChange={(e) => setImage(e.target.value)} type = 'url' required/>
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
                                    onClick= {updatePerson}                        
                                    type='submit'> Update
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </div> :
                ""
                }
            </Paper>
        </div>
    )
}
export default UpdateDMVPage