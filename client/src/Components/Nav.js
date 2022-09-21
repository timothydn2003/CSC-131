import {Link} from 'react-router-dom'
import '../App.css'
const Nav = () => {
    return(
        <header className="container">
            <Link to={'/'}><h2 className='logo'>TravelX</h2></Link>
            <nav>
                <div className='links'>
                    <Link to = {'/'}>Home</Link>
                    <Link to = {'/addPerson'}>Add New Person</Link>
                </div>
            </nav>
        </header>
    )
}
export default Nav