const SS = (props) => {
    return (
        <div>
            <h2>Social Security</h2>
            <h5>{props.person.name}</h5>
            <h5>{props.person.dob}</h5>
        </div>
    )
}
export default SS