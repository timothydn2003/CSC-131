import '../App.css'
import { Paper } from "@mui/material";

const DOS = (props) => {
    
    return(
        <div>
            <h2 className='title'>Department of State</h2>
          {props.dosList.map((data) => {
            if(data.ssn === props.num){
                return(
                    <Paper style={{  border: "2px solid black"}}>
                    <div className='content'>
                        <img className='image' src= {data.dosImage} alt = "Department of State Photo"></img>
                        <h3 className="info"><b>Full Name: </b>{data.name}</h3>
                        <h3 className="info"><b>Date-of-Birth: </b>{data.dob}</h3>
                        <h3 className="info"><b>Passport Number: </b>{data.passportnumber}</h3>
                        <h3 className="info"><b>Passport Expiration: </b>{data.passportexpiration}</h3>
                    </div>
                    </Paper>
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