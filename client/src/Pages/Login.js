import { Button,TextField } from "@mui/material";
import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { useContext } from 'react'
import { AppContext } from "../App";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = (props) => {
    const{setLoginPassword, setLoginUsername} = useContext(AppContext)
    const [values, setValues] = React.useState({
        showPassword: false,
      });
    const stop = (event) => {
        event.preventDefault();
    }
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
        <div className="login-page">
            <form className="login-form" onSubmit={stop}>
                <h4>Login</h4>
                <TextField id="filled-basic" label="Email" variant="filled" onChange={(e) => setLoginUsername(e.target.value)} required/>
                <FormControl sx={{ m: 1, width: '100%', margin: 0}} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
          <br/>
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