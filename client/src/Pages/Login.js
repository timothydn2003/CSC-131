import { Button,TextField } from "@mui/material";
import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const finalEmail = 'admin@csus.edu'
    const finalPassword = 'teamhornet'
    const [correct,setCorrect] = useState(false)
    
    const stop = (event) => {
        event.preventDefault();
    }
    const check = () => {
        if(email === finalEmail && password === finalPassword){
            setCorrect(true)
        }else{
            setCorrect(false)
        }
    }

    return(
        <div className="login-page">
            <form className="login-form" onSubmit={stop}>
                <h4>Login</h4>
                <TextField id="filled-basic" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)} required/>
                <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => setPassword(e.target.value)} type={'password'} required/><br/>
                <Button 
                    disableElevation
                    id='submit-btn' 
                    variant='contained'
                    color='success'
                    size='large'
                    style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                            textTransform: "capitalize"}}
                    onClick={() => {check()}} 
                    type='submit'>Login
                    <LoginIcon />
                </Button>
            </form>
        </div>
    )
}

export default Login