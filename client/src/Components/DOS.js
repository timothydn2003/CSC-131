import '../App.css'
import useDOS from '../Hooks/useDOS'
import { useState,useEffect } from "react";

const DOS = (props) => {
    const{entities} = useDOS();
    const[people,setPeople] = useState([])

    useEffect(() => {
        async function getDOS(){
            const response = await entities.people.list();
            setPeople(response.items)
        }
        getDOS();

    },[])
    
    return(
        <div>
            <h2>Department of State</h2>
          {people.map((data) => {
            if(data.ssn === props.num){
                return(
                    <div className='content'>
                        <img className='image' src= {data.dosImage}></img>
                        <h3>{data.name}</h3>
                        <h3>{data.dob}</h3>
                        <h3>{data.passportnumber}</h3>
                        <h3>{data.passportexpiration}</h3>


                    </div>
                )
            }
          })}
        </div>
    )
}

export default DOS