import { useState } from "react";
import { useParams } from "react-router-dom";

function Contact({services}){
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        email:"",
        YourMessage: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        alert("Message has been successfully sent")
        setForm({})
    }

    const handleChange= (e) => {
        const{name,value} = e.target;
        setForm((prev) => ({...prev, [name]: value}))
    }

    return (
        <div className="">
            <h2 className="">Contact Us</h2>
            <form onSubmit={handleSubmit} className="">

                <input 
                    type="text" 
                    value={form.name}
                    placeholder="Name"
                    onChange= {onChange}
                    required
                    className="border"
                />

                <input type="email" value={form.name} placeholder="Email" required
                    className="border"
                />

                <input type="text" value={form.email} placeholder="Type your message here" 
                    required
                    className="border"
                />

                <button type="submit" className=" bg-blue-600 text-white p-2 rounded">
                    Send
                </button>
            </form>
        </div>

    );
}
export default Contact