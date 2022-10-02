import { TextField } from '@mui/material';
import { useState } from 'react'


const SSPage = () => {
    const[name,setName] = useState('')
    const[ssn,setSSN] = useState('');
    return(
        <div>
            <form>
                <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)} required/>
                <TextField id="filled-basic" label="SSN" variant="filled" onChange={(e) => setSSN(e.target.value)} required/>
            </form>
            <h1>{name}</h1>
        </div>
    )
}
export default SSPage