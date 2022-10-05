import useDMV from '../../Hooks/useDMV'
import { useState,useEffect } from 'react'
import { Button, Paper, TextField, Modal} from '@mui/material';
import Box from '@mui/material/Box';
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
    const handleOpen = () => setShow(true)
    const handleClose = () => setShow(false)

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
      };
      //styling for modal
    useEffect(() => {
        async function getDMV(){
            const response = await entities.people.list();
            setPeople(response.items)
        }
        getDMV()
    })
    //get list of people from database when page loads
    const stop = (event) => {
        event.preventDefault();
    }
    //prevents page from loading on form submit
    const findPerson = () =>{
        people.map((data) => {
            if(data.name === name){
                setPerson(data)
                handleOpen()
            }
        })
    }
    //searches for person in database
    const updatePerson = async() => {
        const response = await entities.people.update({
            _id: person._id,
            image:image,
            dl: dl
        })
        entities.people.onUpdate((data) => {
            alert(`${person.name} has been updated!`);
          });
    }
    //updates person in database
    return(
        <div className='updateDMV'>
            <Paper style={{width: "420px", padding: ".8rem", height: "200px"}}>
            
            <form onSubmit={stop}>
                <div className='header'>
                    <h3>Update a New Person</h3>
                    <Link to={'/DMV'}>
                        <Button variant='outlined' style={{fontSize: '10px', right:"20px"}}>Add New Person</Button>
                    </Link>
                </div>
                <Row>
                    <Col md = '6' xs = '12'>
                        <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                    </Col>
                    <Col md = '6' xs = '12'>
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
            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                ><Box sx={style}>
                <div className='updateDMV-form'>
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
                </div>
                </Box>
            </Modal>
        
            </Paper>
        </div>
    )
}
export default UpdateDMVPage