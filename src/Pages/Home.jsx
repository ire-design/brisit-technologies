import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen w-full md:w-4/5 mx-auto bg-gray-100 text-slate-900">
      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-14 px-4 md:px-12 w-full relative">
        
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left mt-12 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Brisit Technologies
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-2xl md:text-4xl font-extrabold">
              — Fast, Reliable, Local
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            We provide professional device repair, managed IT, and smart technology solutions for businesses. Transparent pricing and a team you can trust.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/services" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Our Services</Link>
            <Link to="/contact" className="px-6 py-3 bg-white border text-slate-800 font-semibold rounded-lg hover:shadow transition">Contact</Link>
          </div>

          <ul className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start text-slate-600 text-sm">
            <li className="flex items-center gap-2">
              <strong className="text-xl text-slate-900">10k+</strong>
              Devices serviced
            </li>
            <li className="flex items-center gap-2">
              <strong className="text-xl text-slate-900">4.5</strong>
              Avg. customer rating
            </li>
            <li className="flex items-center gap-2">
              <strong className="text-lg text-slate-900">Same-day</strong>
              Repairs available
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=500" alt="Technician repairing a device" className="w-full h-72 md:h-[420px] object-cover rounded-2xl" />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-14 px-4 md:px-12 w-full bg-gray-50 rounded-2xl shadow-inner my-8">
        <div className="md:w-1/2 w-full mb-8 md:mb-0">
          <img src="/src/assets/logoImg.jpeg" alt="Brisit company logo and team" className="w-full h-64 md:h-90 object-cover rounded-4xl" />
        </div>
        <div className="md:w-1/2 w-full space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
          <p className="text-slate-600">
            Brisit Technologies is your go-to technology partner for device repair, proactive IT, and expert tech support. We blend technical expertise with customer care to keep you productive.
          </p>
          <div className="flex gap-3">
            <Link to="/about" className="px-5 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">Learn More</Link>
            <Link to="/services" className="px-5 py-3 border rounded-lg text-slate-700 hover:bg-slate-50 transition">Browse Services</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <span className="font-semibold text-slate-900">Device Repair</span>
              <div className="text-slate-600">Phones, laptops, tablets.</div>
            </div>
            <div>
              <span className="font-semibold text-slate-900">Managed IT</span>
              <div className="text-slate-600">Proactive business support.</div>
            </div>
            <div>
              <span className="font-semibold text-slate-900">On-site Support</span>
              <div className="text-slate-600">Local urgent visits.</div>
            </div>
            <div>
              <span className="font-semibold text-slate-900">Data Backup</span>
              <div className="text-slate-600">Business continuity.</div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}