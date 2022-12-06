import '../App.css'
import { Paper } from "@mui/material";

const SS = (props) => {
   
    return(
        <div>
            <h2 className='title'>Social Security</h2>
          {props.ssList.map((data) => {
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