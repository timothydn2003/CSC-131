import useDMV from "../Hooks/useDMV"
import { useState,useEffect } from "react";
import useFetchDMV from "../Hooks/useFetchDMV";
const DMV = (props) => {
    const{entities} = useDMV();
    const{dmvList} = useFetchDMV();
    const[person,setPerson] = useState({});
    const[name,setName] = useState('')
    const[dob,setDOB] = useState('')

    return(
        <div>
            <h2 className="title">Department of Motor Vehicles</h2>
           {dmvList.map((data) => {
                if(data.ssn === props.num){
                    return(
                        <div className="content">
                            <img className="image" src= {data.image} alt = 'DMV Photo'></img>
                            <h3 className="info"><b>Full Name:</b> {data.name}</h3>
                            <h3 className="info"><b>Drivers License Number:</b> {data.dl}</h3>
                            <h3 className="info"><b>Date-of-Birth:</b> {data.dob}</h3>
                         </div>
                    )
                }
           })}
        </div>
    )
}
export default DMV