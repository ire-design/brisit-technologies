import { useState } from "react";
import { useParams } from "react-router-dom";

function Contact({services}){
    const { id } = useParams();

    const selectedService = id && services ? services.find(s => s.id === parseInt(id)) : null;

    const [form, setForm] = useState({
        name: "",
        email:"",
        service: selectedService ? selectedService.subtitle : "",
        YourMessage: ""
    });

    const handleChange= (e) => {
        const{name,value} = e.target;
        setForm((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = (e) => {
            e.preventDefault();
            console.log(form);
            alert("Message has been successfully sent")
            setForm({ name: "", email:"", service: selectedService ? selectedService.subtitle : "", YourMessage: ""})
    }

    return (
        <div className="min-h-screen w-full md:w-4/5 mx-auto py-12 px-4 md:px-12 bg-gray-50"
        style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')"
            }}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                            Contact Us
                        </h2>
                        <p className="text-slate-600">
                            Have a question? We'd love to hear from you.
                        </p>
                    </div>

                    {selectedService && (
                        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                            <p className="text-sm text-slate-600">Inquiring about:</p>
                            <p className="font-semibold text-slate-900 text-lg">
                                {selectedService.subtitle}
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={form.name}
                                placeholder="Brian Situma" 
                                onChange={handleChange}
                                required
                                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={form.email} 
                                onChange={handleChange}
                                placeholder="brisit@example.com" 
                                required
                                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                            />
                        </div>

                        <div>
                            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                                Service Interest
                            </label>
                            <input 
                                type="text" 
                                id="service"
                                name="service"
                                value={form.service}
                                placeholder="Which service are you interested in?"
                                onChange={handleChange}
                                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>

                        
                        <div>
                            <label htmlFor="YourMessage" className="block text-sm font-semibold text-slate-700 mb-2">
                                Your Message
                            </label>
                            <textarea
                                id="YourMessage" 
                                name="YourMessage"
                                value={form.YourMessage} 
                                onChange={handleChange}
                                placeholder="Tell us how we can help you..." 
                                required
                                rows="5" 
                                className="w-full border border-slate-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none" 
                            />
                        </div>

                                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Send Message 
                        </button>
                    </form>

            </div>
        </div>
    );

}
export default Contact