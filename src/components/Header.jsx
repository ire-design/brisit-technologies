import {Link} from 'react-router-dom' ; 
function Header (){
    return(
    <div>
        <nav className="navigation"> 
            <img src="" alt="" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>
    );
}
export default Header;