import { FaFacebook, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <footer>
      <div className="bottom-0 w-full border-t border-gray-200 p-6 z-50 bg-white text-center">
        <h2 className="font-bold">Brisit Technologies</h2>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum minima omnis sed? 
          Optio, quasi cum, vitae molestiae libero tenetur, quis non velit rem doloribus 
          ut itaque voluptas dolore eligendi amet?
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4 text-xl">
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
        <div className="flex justify-between p-4 text-sm ">
          
              <p>{String.fromCharCode(169)} 2025 Brisit Technologies. All rights reserved</p>
              <p>Built .......................</p>

          </div>  
    </div>
    </footer>
    
  )
}

export default Footer
