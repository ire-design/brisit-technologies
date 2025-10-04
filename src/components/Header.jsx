import {Link} from 'react-router-dom' ; 

function Header (){
    return(
    <header className='text-lg sticky top-0 w-full p-3 left-0 bg-white shadow z-50'>
    <div className='flex items-center justify-between w-full px-6'>

        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/assets/logoImg.jpeg"alt="Brisit Logo"className="h-10 w-10 rounded-full shadow"
          />
          <span className="font-bold text-xl text-blue-800 tracking-wide">
            Brisit Technologies
          </span>
        </Link>

        <nav className="flex space-x-8 font-medium text-gray-700"> 
            <ul className='flex space-x-8'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>

    </header>
    );
}
export default Header;