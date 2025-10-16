import { Link } from "react-router-dom";
import logoImg from "../assets/logoImg.jpeg"

export default function About() {
  return (
    <div className="min-h-screen w-full md:w-4/5 mx-auto bg-gray-100 text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg my-6">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-green-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="grid md:grid-cols-2 min-h-[78vh]">
          <div className="flex flex-col justify-center gap-5 p-8 md:p-14">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              About Brisit Technologies
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-2xl md:text-4xl">
                — Fast, Reliable, Local
              </span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg">
              We’re a people-first IT team making technology easy, secure, and dependable for homes and businesses.
            </p>
            <p className="text-slate-600 text-base md:text-lg">
              From same‑day device repairs to managed IT and consulting, we keep you productive with transparent pricing and expert support.
            </p>

            <div className="flex gap-3 pt-2">
              <Link to="/services" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                Our Services
              </Link>
              <Link to="/contact" className="px-6 py-3 bg-white border text-slate-800 font-semibold rounded-lg hover:shadow transition">
                Contact
              </Link>
            </div>

            <ul className="mt-4 flex flex-wrap gap-6 text-slate-600 text-sm">
              <li className="flex items-center gap-2"><strong className="text-slate-900 text-lg">10k+</strong> devices serviced</li>
              <li className="flex items-center gap-2"><strong className="text-slate-900 text-lg">4.5</strong> avg. rating</li>
              <li className="flex items-center gap-2"><strong className="text-slate-900 text-lg">Same‑day</strong> repairs</li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1721333089496-caee7da840c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
              alt="Technician repairing a device"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Floating logo card */}
        <div className="absolute left-6 bottom-6 md:left-10 md:bottom-10 bg-white/80 backdrop-blur-sm border rounded-2xl shadow px-4 py-3 flex items-center gap-3">
          <img src={logoImg} alt="Brisit logo" className="w-10 h-10 rounded-lg object-cover" />
          <div className="text-sm">
            <div className="font-semibold text-slate-900">Brisit Technologies</div>
            <div className="text-slate-600">Your local IT partner</div>
          </div>
        </div>
      </section>

      {/* MISSION / WHAT WE DO / WHY US */}
      <section className="grid md:grid-cols-3 gap-6 my-10">
        <div className="bg-gray-50 rounded-2xl p-6 md:p-7 shadow-inner">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-slate-600">
            Deliver trustworthy, high‑quality tech services that keep people and businesses running—without the hassle.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 md:p-7 shadow-inner">
          <h3 className="text-xl font-bold mb-2">What We Do</h3>
          <p className="text-slate-600">
            Device repair, managed IT, on‑site support, data protection, networking, and smart home setups.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 md:p-7 shadow-inner">
          <h3 className="text-xl font-bold mb-2">Why Choose Us</h3>
          <ul className="text-slate-600 list-disc pl-5 space-y-1">
            <li>Transparent pricing</li>
            <li>Fast turnaround</li>
            <li>Local, friendly experts</li>
          </ul>
        </div>
      </section>
    </div>
  );
}