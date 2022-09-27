import { useState, useEffect } from 'react'
import '../App.js';
import Content from '../Components/Content.js';
import useFetch from '../useFetch.js';
import { validSSN } from '../regex.js';
import { Button } from "@mui/material";
import { PatternFormat } from "react-number-format";
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

const Home = () => {
    const[num,setNum] = useState("");
    const[people, setPeople] = useState([]);
    const[person,setPerson] = useState({})
    const [errSSN, setErrSSN] = useState(false);
    const {entities} = useFetch();
    //declaring states

    const validate = () => {
        if (!validSSN.test(num)) {
           setErrSSN(true);
        }
        else if(validSSN.test(num)) {
            setErrSSN(false);
        }
    };
     //returns an error message if SSN is entered incorrectly

    const stop = (event) => {
        event.preventDefault();
    }
    //prevent page from refreshing on form submit


    useEffect( () => {
        async function getData(){
          const list = await entities.people.list();
          setPeople(list.items)
        }
        getData();
      },[])
      //fetches data right when page loads

      const searchForPerson = () => {
        people.map((data) => {
            if(data.ssn === num) {
                setPerson(data)
            }
        })
        console.log(person)
      }
      //search for person based on ssn
    return(
        <div className='home'>
                <div className='content'>
                    <form className='ssn-form' onSubmit={stop}>
                        <label>Enter SSN</label><br/>
                       <PatternFormat className= 'ssn-input'
                            format="###-##-####" 
                            placeholder='xxx-xx-xxxx'
                            onChange={(e) => {setNum(e.target.value)
                            console.log(e.target.value)}}
                        /> 
                        <Button 
                            disableElevation
                            id='submit-btn' 
                            variant='contained'
                            color='success'
                            size='large'
                            style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                                textTransform: "capitalize"}}
                            onClick={() => {validate(); searchForPerson()}} 
                            type='submit'>Search
                        <PersonSearchRoundedIcon/>
                        </Button>
                        
                        {errSSN && <p>SSN is invalid. Please try again.</p>}
                    
                    </form>
                </div> 
                <Content person = {person}/>

        </div>
    )
}
export default Home