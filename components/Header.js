import {LOGO_IMG} from '../utils/constant'
import { Link } from 'react-router-dom'

const Header = () => {
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
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header;