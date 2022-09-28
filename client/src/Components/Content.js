import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../App.css'
import DMV from './DMV';
import SS from './SS';
import DOS from './DOS';
const Content = (props) => {
    return(
        <div className='data'>
        <Container>
            <Row>
                <Col md = "4" xs = "12">
                  <DMV person = {props.dmvPerson}/>
                </Col>
                <Col md = "4" xs = "12"> 
                    <SS person = {props.ssPerson}/>
                </Col>
                <Col md = "4" xs = "12"> 
                    <DOS person = {props.dosPerson}/>
                </Col>

            </Row>
        </Container>

        </div>
    )
}
export default Content