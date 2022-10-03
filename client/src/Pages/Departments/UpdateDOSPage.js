import { useState,useEffect } from "react";
import useDOS from "../../Hooks/useDOS"
import { Link } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import Row from 'react-bootstrap/esm/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import '../../App.css'
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

const UpdateDOSPage = () => {
    const{entities} = useDOS();
    const[name,setName] = useState();
    const[people,setPeople] = useState([])
    const[person,setPerson] = useState({})
    const[show,setShow] = useState(false)
    const[passport,setPassport] = useState('')
    const[passportExpir,setPassportExpir] = useState('')
    const[image,setImage] = useState('')

    const stop = (event) => {
        event.preventDefault();
    }
    useEffect(() => {
        async function getDMV(){
            const response = await entities.people.list();
            setPeople(response.items)
        }
        getDMV()
    })
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
            passportnumber:passport,
            passportexpiration:passportExpir
        })
        entities.people.onUpdate((data) => {
            alert(`An existing product named ${data.result.name} has been updated!`);
          });
    }
    return(
        <div className="updateDOS">
            <form onSubmit={stop}>
            <Link to={'/DepartmentOfState'}>
                <Button>Add Person</Button>
            </Link>
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
            {show? <div className='updateDOS-form'>
                    <form onSubmit={stop}>
                        <h3>Update: <span>{person.name}</span></h3>
                        <Row>
                            <Col md = '6' xs = '12'>
                                <TextField id="filled-basic" label="Updated Passport Number" variant="filled" onChange={(e) => setPassport(e.target.value)} required/>
                            </Col>
                            <Col md = '6' xs = '12'>
                            <TextField
                                id="date"
                                label="Updated Passport Expiration"
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
                                <TextField id="filled-basic" label="Update Picture" variant="filled" onChange={(e) => setImage(e.target.value)} type='u' required/>
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
                                    onClick= {updatePerson}                      
                                    type='submit'> Update
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </div> :
                ""
                }
        </div>
    )
}
export default UpdateDOSPage