import {LOGO_IMG} from '../utils/constant'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../utils/UserContext'


const Header = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src= {LOGO_IMG}
                />
            </div>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/about">About </Link></li>
                <li><Link to="/contact">Contact Us </Link></li>
                <li>{loggedInUser}</li>
            </ul>
        </div>
    )
}

export default Header;