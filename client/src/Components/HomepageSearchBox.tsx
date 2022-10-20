
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { SSNbox } from './SSNbox';
import Button from '@mui/material/Button';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { Status } from '../Pages/Home';


const stop = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
}

interface SSNsearchBoxProps{
    values:string,
    alertStat: Status,
    setValues(arg: any):void,
    onclick():void
}

const alertText ={'warning':'SSN not found','error':'SSN is invalid. Please try again.'}
export const SSNsearchBox = ({values,setValues,onclick,alertStat}:SSNsearchBoxProps) =>{
return(
    <Container className='ssn-search-container'>
        <Paper elevation={24} variant={'outlined'} className={'ssn-search-paper'} >
            <div className='ssn-search-header'>
                <h3>Passenger Records</h3>
                <p>Search for a passenger by entering their SSN.</p>
            </div>
            <div  className="ssn-search-centerdiv"></div>
            <form className='ssn-form' onSubmit={stop}>
                <SSNbox classname='ssn-custom-box' values={values} setValues={setValues}/>                                
                <Button 
                    disableElevation
                    id='submit-btn' 
                    variant='contained'
                    color='success'
                    size='large'
                    style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                        textTransform: "capitalize"}}
                    onClick={onclick} 
                    type='submit'>Search
                <PersonSearchRoundedIcon/>
                </Button>
                { alertStat==('error'||'warning')  && <Alert className='ssn-search-alert' severity='error'>{alertText[alertStat]}</Alert>}
            </form>
        </Paper>
    </Container>
    )
}