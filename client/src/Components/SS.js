import '../App.css'
import useSS from '../Hooks/useSS'
import { useState,useEffect } from "react";
import useFetchSS from '../Hooks/useFetchSS';
import { Paper } from "@mui/material";

const SS = (props) => {
   const{ssList} = useFetchSS()
    return(
        <div>
            <Paper style={{  border: "2px solid black"}}>
            <h3 className='title'>Social Security</h3>
            </Paper>
          {ssList.map((data) => {
            if(data.ssn === props.num){
                return (
                    <Paper style={{  border: "2px solid black"}}>
                    <div className='content'>
                        <h3 className="info"> <b>Full Name: </b>{data.name}</h3>
                        <h3 className="info"> <b>Date-of-Birth: </b>{data.dob}</h3>
                    </div>
                    </Paper>
                )
            }
          })}
        </div>
    )
}

export default SS