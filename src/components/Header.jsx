import {Link} from 'react-router-dom' ; 
function Header (){
    return(
    <div className='fixed w-full p-3 left-0 bg-white shadow z-50'>
        <img src="" alt="" />

        <nav className="navigation"> 
            <ul className='flex justify-end space-x-8'>
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