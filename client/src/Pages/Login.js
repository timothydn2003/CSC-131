import { Button,TextField } from "@mui/material";
import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { useContext } from 'react'
import { AppContext } from "../App";

const Login = (props) => {
    const{setLoginPassword, setLoginUsername} = useContext(AppContext)
    const stop = (event) => {
        event.preventDefault();
    }
    return(
        <div className="login-page">
            <form className="login-form" onSubmit={stop}>
                <h4>Login</h4>
                <TextField id="filled-basic" label="Email" variant="filled" onChange={(e) => setLoginUsername(e.target.value)} required/>
                <TextField id="filled-basic" label="Password" variant="filled" onChange={(e) => setLoginPassword(e.target.value)} type={'password'} required/><br/>
                <Button 
                    disableElevation
                    id='submit-btn' 
                    variant='contained'
                    color='success'
                    size='large'
                    style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                            textTransform: "capitalize"}}
                    onClick={props.check} 
                    type='submit'>Login
                    <LoginIcon />
                </Button>
            </form>
        </div>
    )
}

export default Login