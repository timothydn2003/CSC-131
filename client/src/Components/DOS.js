import '../App.css'
const DOS = (props) => {
    return(
        <div>
            <h2>Department of State</h2>
            <img className='image' src= {props.person.image}></img>
            <h5>{props.person.name}</h5>
            <h5>{props.person.dl}</h5>
            <h5>{props.person.dob}</h5>
            <h5>{props.person.passportnumber}</h5>
            <h5>{props.person.passportexpiration}</h5>
        </div>
    )
}
export default DOS