import '../App.css'
import useSS from '../Hooks/useSS'
import { useState,useEffect } from "react";

const SS = (props) => {
    const{entities} = useSS();
    const[people,setPeople] = useState([])

    useEffect(() => {
        async function getSS(){
            const response = await entities.people.list();
            setPeople(response.items)
        }
        getSS();

    },[])
    
    return(
        <div>
            <h2 className='title'>Social Security</h2>
          {people.map((data) => {
            if(data.ssn === props.num){
                return (
                    <div className='content'>
                        <h3 className="info">{data.name}</h3>
                        <h3 className="info">{data.dob}</h3>
                    </div>
                )
            }
          })}
        </div>
    )
}

export default SS