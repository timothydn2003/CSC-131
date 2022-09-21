import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css'
const Content = (props) => {
    return(
        <div className='data'>
        <Row>
            <Col md = "4" xs = "12">
                <h1>DMV</h1>
                <h5>{props.person.name}</h5>
                <h5>{props.person.dl}</h5>
                <h5>{props.person.dob}</h5>
                <img className='image' src= {props.person.image}></img>
            </Col>
            <Col md = "4" xs = "12"> 
                <h1>SS</h1>
                <h5>{props.person.name}</h5>
                <h5>{props.person.dob}</h5>
            </Col>
            <Col md = "4" xs = "12"> 
                <h1>Department of State</h1>
                <h5>{props.person.name}</h5>
                <h5>{props.person.dl}</h5>
                <h5>{props.person.dob}</h5>
                <h5>{props.person.passportnumber}</h5>
                <h5>{props.person.passportexpiration}</h5>
                <img className='image' src= {props.person.image}></img>
            </Col>

        </Row>

        </div>
    )
}
export default Content