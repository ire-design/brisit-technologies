import { FaFacebook, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className=" w-full border-t border-gray-200 p-6 z-50 bg-white text-center">
        <h2 className="font-bold">Brisit Technologies</h2>
        <p className="mt-2">
          Brisit Technologies empowers businesses with innovative software solutions, transforming ideas into digital reality with expertise and passion.
        </p>

        {/* Social Icons */}
        {/* modified */}
        <div className="flex justify-center gap-7 mt-6 text-2xl">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook  className="text-[#1877F2]"/>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#0A66C2]"/>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500"/>
          </a>
          <a href="mailto:info@brisit.com">
            <FaEnvelope className="text-gray-600"/>
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-100 mt-8 pt-5 text-sm text-gray-500 gap-2">
          <p>
            &copy; {new Date().getFullYear()} Brisit Technologies. All rights reserved.
          </p>
          <p>
            Built by <a href="https://https://github.com/ire-design" className="text-blue-700 hover:underline">WebStars</a>
          </p>
        </div>
    </div>
    </footer>
    
  )
}

export default Footer
