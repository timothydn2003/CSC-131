import '../App.css'
import useDOS from '../Hooks/useDOS'
import { useState,useEffect, useMemo } from "react";

const DOS = (props) => {
    const{entities} = useDOS();
    const[people,setPeople] = useState([])
    const[match,setMatch] = useState(false)

    async function getDOS(){
        const response = await entities.people.list();
        setPeople(response.items)
    }
    useEffect(() => {
        getDOS();
    },[])
    
    return(
        <div>
            <h2 className='title'>Department of State</h2>
          {people.map((data) => {
            if(data.ssn === props.num){
                return(
                    <div className='content'>
                        <img className='image' src= {data.dosImage} alt = "Department of State Photo"></img>
                        <h3 className="info">{data.name}</h3>
                        <h3 className="info">{data.dob}</h3>
                        <h3 className="info">{data.passportnumber}</h3>
                        <h3 className="info">{data.passportexpiration}</h3>
                    </div>
                )
            }
            else{
                return <h3></h3>
            }
          })}
        </div>
    )
}

export default DOS