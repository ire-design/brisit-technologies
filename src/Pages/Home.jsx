

function Home(){
    return (
    <div className="flex  md:flex-row  border border-red-300  min-h-screen px-8 md:px-16 bg-white">
  
  {/* Left side - Text */}
  <div className="flex-1 text-center md:text-left border border-blue-500">
    <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
      Brisit Technologies
    </h1>
    <p className="mt-4 text-lg text-gray-600 max-w-lg">
      Reliable computer repairs, software installation, and accessories.
      We bring solutions to your home, office, or business.
    </p>
    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
      Get Started
    </button>
  </div>

  {/* Right side - Image */}
  <div className="flex-1 mt-10 md:mt-0 md:ml-12 border border-blue-500">
    <img
      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXIlMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D"
      alt="Computer Repair"
      className="w-full max-w-md md:max-w-lg rounded-l-[3rem] shadow-lg"
    />
  </div>
</div>

    );
}
export default Home