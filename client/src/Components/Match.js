import {useState} from 'react'
const Match = (props) => {
    const[match,setMatch] = useState(false);

    return(
        <div>
            <h1>{props.dmvName}</h1>
            <h1>{props.dosName}</h1>
            <h1>{props.ssName}</h1>

           

        </div>
    )
}
export default Match