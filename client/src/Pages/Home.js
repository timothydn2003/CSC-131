import { useState, useEffect } from 'react'
import '../App.js';
import Content from '../Components/Content.js';
import useFetch from '../Hooks/useFetch.js';
import { validSSN } from '../regex.js';
import { Button } from "@mui/material";
import { PatternFormat } from "react-number-format";
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

const Home = () => {
    const[num,setNum] = useState("");
    const[dos, setDOS] = useState([]);
    const[ss, setSS] = useState([]);
    const[dmv,setDMV] = useState([])
    const[dosPerson,setDOSPerson] = useState({})
    const[ssPerson,setSSPerson] = useState({})
    const[dmvPerson,setDMVPerson] = useState({})
    const [errSSN, setErrSSN] = useState(false);
    const[match,setMatch] = useState(false)
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
        async function getDOS(){
          const list = await entities.DOS.list();
          setDOS(list.items)
        }
        getDOS();

        async function getSS(){
            const list = await entities.SS.list();
            setSS(list.items)
        }
        getSS();

        async function getDMV(){
            const list = await entities.DMV.list();
            setDMV(list.items)
        }
        getDMV();
      },[])
      //fetches data right when page loads

      const searchForPersonDMV = () => {
        dmv.map((data) => {
            if(data.ssn === num) {
                setDMVPerson(data)
            }
        })
      }
      const searchForPersonDOS = () => {
        dos.map((data) => {
            if(data.ssn === num) {
                setDOSPerson(data)
            }
        })
      }
      const searchForPersonSS = () => {
        ss.map((data) => {
            if(data.ssn === num) {
                setSSPerson(data)
            }
        })
      }
      //search for person based on ssn
      const check = () => {
        if(dosPerson.name === dmvPerson.name && dmvPerson.name === ssPerson.name && dosPerson.dob === dmvPerson.dob && dmvPerson.dob === ssPerson.dob){
            setMatch(true);
        }else{
            setMatch(false)
        }
        console.log(match)
      }
    return(
        <div className='home'>
                <div className='content'>
                    <form className='ssn-form' onSubmit={stop}>
                        <label>Enter SSN</label><br/>
                       <PatternFormat className= 'ssn-input'
                            format="###-##-####" 
                            placeholder='xxx-xx-xxxx'
                            onChange={(e) => setNum(e.target.value)}
                        /> 
                        <Button 
                            disableElevation
                            id='submit-btn' 
                            variant='contained'
                            color='success'
                            size='large'
                            style={{position: "absolute", borderRadius: "10px",padding: ".5rem",
                                textTransform: "capitalize"}}
                            onClick={() => {validate(); searchForPersonDMV(); searchForPersonDOS(); searchForPersonSS(); check()}} 
                            type='submit'>Search
                        <PersonSearchRoundedIcon/>
                        </Button>
                        
                        {errSSN && <p>SSN is invalid. Please try again.</p>}

                    </form>
                    <Content dmvPerson = {dmvPerson} ssPerson = {ssPerson} dosPerson = {dosPerson}/>
                    {match?"MATCH":"NO MATCH"}
                </div> 

        </div>
    )
}
export default Home