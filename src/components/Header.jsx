import {Link} from 'react-router-dom' ; 

function Header (){
    return(
    <header className='text-base sticky top-0 w-full p-3 left-0 bg-white shadow-sm z-50'>
    <div className='flex items-center justify-between w-full px-6'>

        <Link to="/" className="flex items-center gap-2">
          <img
            src="/src/assets/logoImg.jpeg"alt="Brisit Logo"className="h-10 w-10 rounded-full border shadow-sm"
          />
          <span className="font-bold text-xl text-blue-800 tracking-wide">
            Brisit Technologies
          </span>
        </Link>

        <nav className="flex space-x-8 font-medium text-gray-700 "> 
            <ul className='flex space-x-8'>
                <li><Link to="/" className="hover:text-blue-700 ">Home</Link></li>
                <li><Link to="/services" className="hover:text-blue-700 ">Services</Link></li>
                <li><Link to="/about" className="hover:text-blue-700 ">About</Link></li>
                <li><Link to="/contact" className="hover:text-blue-700 ">Contact</Link></li>
            </ul>
        </nav>
    </div>

    </header>
    );
}
export default Header;