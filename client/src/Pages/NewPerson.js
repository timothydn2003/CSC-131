import { useState, useEffect } from 'react'
import useFetch from '../useFetch.js';
import '../App.css';
const NewPerson = () => {
    const[name,setName] = useState("")
    const[dl,setDl] = useState("")
    const[dob,setDob] = useState("")
    const[ssn,setSsn] = useState("")
    const[image,setImage] = useState("")
    const[passport,setPassport] = useState("")
    const[passportexpir,setPassportExpir] = useState("")

    const {entities} = useFetch();

    const stop = (event) => {
        event.preventDefault();
    }
    //prevent page from refreshing on form submit
    
    const send = async() => {
        const response = await entities.people.add({
            name:name,
            dl:dl,
            dob:dob,
            ssn:ssn,
            image:image,
            passportnumber:passport,
            passportexpiration: passportexpir
        },
        {
            sycnMode: "ASYNC"
        })
        entities.people.onAdd((data) => {
            alert(`A new person named ${data.result.name} been added!`);
        })
    }
    useEffect(() => {
        const unsubscribe = entities.people.onAdd((data) => {
            alert(`A new person named ${data.result.name} been added!`);
        })
        return () => unsubscribe();
    }, [])
    return(
        <div className='newPerson'>
            <form onSubmit={stop}>
                <label>Name:</label><br></br>
                <input onChange={(e) => setName(e.target.value)} required/>
                <label>Drivers License Number:</label><br></br>
                <input onChange={(e) => setDl(e.target.value)} required/>
                <label>Date of Birth:</label><br></br>
                <input onChange={(e) => setDob(e.target.value)} type = 'date' required/>
                <label>SSN:</label><br></br>
                <input onChange={(e) => setSsn(e.target.value)}/>
                <label>Image:</label><br></br>
                <input onChange={(e) => setImage(e.target.value)} type = 'url' required/>
                <label>Passport Number:</label><br></br>
                <input onChange={(e) => setPassport(e.target.value)} required/>
                <label>Passport Expiration:</label><br></br>
                <input onChange={(e) => setPassportExpir(e.target.value)} type = 'date' required/>
                <button type='submit' onClick={send}>Submit</button>
            </form>
        </div>
    )
}

export default NewPerson