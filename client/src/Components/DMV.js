import useDMV from "../Hooks/useDMV"
import { useState,useEffect } from "react";
import { Paper } from "@mui/material";
const DMV = (props) => {
    return(
        <div>
            <h2 className="title">Department of Motor Vehicles</h2>
           {props.dmvList.map((data) => {
                if(data.ssn === props.num){
                    return(
                        <Paper style={{  border: "2px solid black"}}>
                        <div className="content">
                            <img className="image" src= {data.image} alt = 'DMV Photo'></img>
                            <h3 className="info"><b>Full Name:</b> {data.name}</h3>
                            <h3 className="info"><b>Drivers License Number:</b> {data.dl}</h3>
                            <h3 className="info"><b>Date-of-Birth:</b> {data.dob}</h3>
                         </div>
                         </Paper>
                    )
                }
           })}
        </div>
    )
}
export default DMV