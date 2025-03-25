import {LOGO_IMG} from '../utils/constant'

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
                <li>Home</li>
                <li>About</li>
                <li>COntact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Header;