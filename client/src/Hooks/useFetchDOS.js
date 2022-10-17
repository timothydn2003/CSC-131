import useDOS from "./useDOS"
import{ useState,useEffect } from 'react'
const useFetchDOS = () => {
    const{entities} = useDOS()
    const[dosList,setDOSList] = useState([])

    useEffect(() => {
        const getList = async() => {    
            const response = await entities.people.list();
            setDOSList(response.items)
        }
        getList();
    },[])
    return{ dosList }
}
export default useFetchDOS;