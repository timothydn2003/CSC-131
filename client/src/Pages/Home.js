import {useState} from 'react'
const Home = () => {
    const[num,setNum] = useState(0);
    const[displayNum,setDisplayNum] = useState(0);


    const stop = (event) => {
        event.preventDefault();
    }
    const show = () => {
        setDisplayNum(num);
    }
    return(
        <div>
            <form onSubmit={stop}>
                <input placeholder='Enter SSN...' 
                onChange={(e) => setNum(e.target.value)}
                required/>
                <button onClick={show} type='submit'>Search</button>
            </form>
            <h1>{displayNum===0?'':displayNum}</h1>
        </div>
    )
}
export default Home