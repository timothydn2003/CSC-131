import '../App.css'
import useSS from '../Hooks/useSS'
import { useState,useEffect } from "react";
import useFetchSS from '../Hooks/useFetchSS';

const SS = (props) => {
   const{ssList} = useFetchSS()
    return(
        <div>
            <h2 className='title'>Social Security</h2>
          {ssList.map((data) => {
            if(data.ssn === props.num){
                return (
                    <div className='content'>
                        <h3 className="info"> <b>Full Name: </b>{data.name}</h3>
                        <h3 className="info"> <b>Date-of-Birth: </b>{data.dob}</h3>
                    </div>
                )
            }
          })}
        </div>
    )
}

export default SS