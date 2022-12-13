import useSS from "./useSS"
import{ useState,useEffect } from 'react'
const useFetchSS = () => {
    const{entities} = useSS();
    const[ssList,setSSList] = useState<any[]>([])

    useEffect(() => {
        const getList = async() => {    
            const response = await entities.people.list();
            setSSList(response.items)
        }
        getList();
    }, []);
    return{ ssList }
}
export default useFetchSS