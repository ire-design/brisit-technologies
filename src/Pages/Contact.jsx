import { useState } from "react";
import { useParams } from "react-router-dom";

function Contact({services}){
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        email:"",
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
            setForm({})
    }

    return (
        <div className=" p-6 max-w-md mx-auto flex  direction justify-center border-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="">

                <input 
                    type="text" 
                    name="name"
                    value={form.name}
                    placeholder="Name"
                    onChange= {handleChange}
                    required
                    className="border p-2 rounded-2xl m-3.5"
                />

                <input 
                    type="email" 
                    name="email"
                    value={form.email} 
                    onChange={handleChange}
                    placeholder="Email" 
                    required
                    className="border p-2 rounded"
                />

                <textarea
                    type="text"
                    name="YourMessage"
                    value={form.YourMessage} 
                    onChange={handleChange}
                    placeholder="Type your message here" 
                    required
                    className="border p-2 rounded"
                />

                <button type="submit" className=" bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                    Send
                </button>
            </form>
        </div>

    );
}
export default Contact