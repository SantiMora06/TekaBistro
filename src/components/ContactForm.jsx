import { useState } from "react";
import classes from "../styles/contactForm.module.css"

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        telefon: "",
        subiect: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5005/send-email", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    setStatus("Email sent successfully!")
                } else {
                    setStatus("Failed to send email.")
                }
            } else {
                setStatus("Failed to send email.")
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return (<>
        <div className={classes.contactForm}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Numele"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Adresa e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="telefon"
                    placeholder="Telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="subiect"
                    placeholder="Subiect"
                    value={formData.subiect}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Mesaj"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Send</button>
            </form>
            {status && <p>{status}</p>}
        </div>
    </>);
}

export default ContactForm;