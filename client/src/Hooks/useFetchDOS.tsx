import useDOS from "./useDOS"
import{ useState,useEffect } from 'react'
const useFetchDOS = () => {
    const{entities} = useDOS()
    const[dosList,setDOSList] = useState<any[]>([])

    useEffect(() => {
        const getList = async() => {    
            const response = await entities.people.list();
            setDOSList(response.items)
        }
        getList();
    },[])
    return { dosList }
}
export default useFetchDOS;
//this file is to fetch the data