import {useState} from 'react'
import '../App.js'
const Home = () => {
    const[num,setNum] = useState(0);
    const[displayNum,setDisplayNum] = useState(0);
    const[people,setPeople] = useState([]);


    const stop = (event) => {
        event.preventDefault();
    }
    const show = () => {
        setDisplayNum(num);
    }
    return(
        <div className='home'>
                <div className='content'>
                    <form className='ssn-form' onSubmit={stop}>
                        <label>Enter SSN</label>
                        <input className='ssn-input'
                        placeholder='xxx-xxx-xxxx' 
                        onChange={(e) => setNum(e.target.value)}
                        required/>
                        <button className='submit-btn' onClick={show} type='submit'>Search</button>
                    </form>
                    <h1 className='num'>{displayNum===0?'':displayNum}</h1>
                </div>

        </div>
    )
}
export default Home