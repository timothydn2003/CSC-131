import useFetchDMV from "../Hooks/useFetchDMV"
import useFetchDOS from "../Hooks/useFetchDOS";
import useFetchSS from "../Hooks/useFetchSS";
import {useState} from 'react'
const Match = (props) => {
    const{dmvList} = useFetchDMV();
    const{ssList} = useFetchSS();
    const{dosList} = useFetchDOS();
    const[match,setMatch] = useState(false);
    const[ssPerson,setSSPerson] = useState({})
    const[dmvPerson,setDMVPerson] = useState({})
    const[dosPeroson,setDOSPerson] = useState({})
    return(
        <div>

        </div>
    )
}
export default Match