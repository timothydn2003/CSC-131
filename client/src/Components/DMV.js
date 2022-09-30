import useDMV from "../Hooks/useDMV"
import { useState,useEffect } from "react";
const DMV = (props) => {
    const{entities} = useDMV();
    const[people,setPeople] = useState([])
    const[person,setPerson] = useState({});
    const[name,setName] = useState('')
    const[dob,setDOB] = useState('')


    useEffect(() => {
        async function getDMV(){
            const response = await entities.people.list();
            setPeople(response.items)
        }
        getDMV()

    },[])
    return(
        <div>
            <h2>Department of Motor Vehicles</h2>
           {people.map((data) => {
                if(data.ssn === props.num){
                    return(
                        <div className="content">
                            <img className="image" src= {data.image}></img>
                            <h3>{data.name}</h3>
                            <h3>{data.dl}</h3>
                            <h3>{data.dob}</h3>
                         </div>
                    )
                }
           })}
        </div>
    )
}
export default DMV