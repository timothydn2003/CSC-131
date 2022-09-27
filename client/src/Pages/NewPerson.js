import { useState, useEffect } from 'react'
import useFetch from '../useFetch.js';
import '../App.css';
import { Button,TextField } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const NewPerson = () => {
    const[name,setName] = useState("")
    const[dl,setDl] = useState("")
    const[dob,setDob] = useState("")
    const[ssn,setSsn] = useState("")
    const[image,setImage] = useState("")
    const[passport,setPassport] = useState("")
    const[passportexpir,setPassportExpir] = useState("")

    const {entities} = useFetch();

    const stop = (event) => {
        event.preventDefault();
    }
    //prevent page from refreshing on form submit
    
    const send = async() => {
        const response = await entities.people.add({
            name:name,
            dl:dl,
            dob:dob,
            ssn:ssn,
            image:image,
            passportnumber:passport,
            passportexpiration: passportexpir
        },
        {
            sycnMode: "ASYNC"
        })
    }
    //send new person object to vendia
    useEffect(() => {
        const unsubscribe = entities.people.onAdd((data) => {
            alert(`${data.result.name} has been added!`);
        })
        return () => unsubscribe();
    },[])
    return(
        <div className='newPerson'>
            <form onSubmit={stop}>
                <h4>New Person</h4>
                <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                <TextField id="filled-basic" label="Drivers License Number" variant="filled" onChange={(e) => setDl(e.target.value)} required/>
                <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    onChange={(e) => setDob(e.target.value)} required
                    sx={{ width: 260 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField id="filled-basic" label="SSN" variant="filled" onChange={(e) => setSsn(e.target.value)} required/>
                <TextField id="filled-basic" label="Image" variant="filled" onChange={(e) => setImage(e.target.value)} type = 'url' required/>
                <TextField id="filled-basic" label="Passport Number" variant="filled" onChange={(e) => setPassport(e.target.value)} required/>
                <TextField
                    id="date"
                    label="Passport Expiration"
                    type="date"
                    onChange={(e) => setPassportExpir(e.target.value)} required
                    sx={{ width: 260 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button 
                    disableElevation
                    id='submit-btn' 
                    variant='contained'
                    color='success'
                    size='large'
                    style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                            textTransform: "capitalize"}}
                    onClick={() => {send()}} 
                    type='submit'>Add New Person
                    <PersonAddIcon/>
                </Button>
            </form>
        </div>
    )
}

export default NewPerson