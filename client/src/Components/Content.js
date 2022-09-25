import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../App.css'
const Content = (props) => {
    return(
        <div className='data'>
        <Container>
            <Row>
                <Col md = "4" xs = "12">
                    <h2>DMV</h2>
                    <img className='image' src= {props.person.image}></img>
                    <h5>{props.person.name}</h5>
                    <h5>{props.person.dl}</h5>
                    <h5>{props.person.dob}</h5>
                </Col>
                <Col md = "4" xs = "12"> 
                    <h2>SS</h2>
                    <h5>{props.person.name}</h5>
                    <h5>{props.person.dob}</h5>
                </Col>
                <Col md = "4" xs = "12"> 
                    <h2>Department of State</h2>
                    <img className='image' src= {props.person.image}></img>
                    <h5>{props.person.name}</h5>
                    <h5>{props.person.dl}</h5>
                    <h5>{props.person.dob}</h5>
                    <h5>{props.person.passportnumber}</h5>
                    <h5>{props.person.passportexpiration}</h5>
                </Col>

            </Row>
        </Container>

        </div>
    )
}
export default Content