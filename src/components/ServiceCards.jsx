import {Link} from "react-router-dom" ;

function ServiceCards({service}){
    const reverseLayout = service.id % 2 === 0

    return (
    <section className={`w-full px-2 md:px-6 mt-6 bg-gray-100 rounded-2xl shadow transition hover:shadow-2xl flex flex-col md:flex-row gap-8 items-center ${reverseLayout? "md:flex-row-reverse": ""}`}>

        <div className="w-full md:w-1/2 text-center md:text-left py-8 px-2 md:px-6">
            <h2 className="text-2xl md:text-4xl font-bold">{service.title}</h2>
            <h3 className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 text-xl md:text-2xl">
            {service.subtitle}
            </h3>
            <p className="text-base md:text-lg text-slate-900 leading-relaxed mb-6">{service.description}</p>
            <Link to={`/contact/${service.id}`}>
            <button className="bg-black text-white hover:scale-105 rounded-3xl p-2 px-6 transition">
                Contact
            </button>
            </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
            src={service.image}
            alt="Service"
            className="w-full md:1/2 rounded-2xl object-cover h-64 md:h-[320px]  shadow"
            />
        </div>
    </section>

    );
}
export default ServiceCards