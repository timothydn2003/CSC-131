import {useState} from 'react'
const Home = () => {
    const[num,setNum] = useState(0);
    const[display,setDisplay] = useState(false)

    const stop = (event) => {
        event.preventDefault();
        setDisplay(true)
    }
    return(
        <div>
            <form onSubmit={stop}>
                <input placeholder='Enter SSN...' 
                onChange={(e) => setNum(e.target.value)}
                required/>
                <button type='submit'>Search</button>
            </form>
            <h1>{display?num:''}</h1>
        </div>
    )
}
export default Home