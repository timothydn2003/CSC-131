import { useState, useEffect } from 'react'
import '../App.js'
import Content from '../Components/Content.js';
import useFetch from '../useFetch.js';


const Home = () => {
    const[num,setNum] = useState("");
    const[people, setPeople] = useState([]);
    const[person,setPerson] = useState({})
    const {entities} = useFetch();
    //declaring states

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
                        <label>Enter SSN</label><br></br>
                        <input className='ssn-input'
                        placeholder='xxx-xxx-xxxx' 
                        onChange={(e) => setNum(e.target.value)}
                        required/>
                        <button className='submit-btn' onClick={() => searchForPerson()} type='submit'>Search</button>
                    </form>
                </div>
              <Content person = {person}/>

        </div>
    )
}
export default Home