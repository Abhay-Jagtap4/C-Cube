import { React, useState } from 'react';
import Footer from '../../Components/Footer/footer';
import { db } from '../../firebase.js';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [reason, setReason] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        // Create a reference to the database location where we want to write data
        db.collection('contacts').add({
            name: name,
            phone: phone,
            email: email,
            date: date,
            address: address,
            reason: reason,
        })
            .then(() => {
                alert("Form submitted");
                setLoader(false);
            })
            .catch(error => {
                alert(error.message);
                setLoader(false);
            })

        /* Clearing the form after submission. */
        setName('');
        setPhone('');
        setEmail('');
        setDate('');
        setAddress('');
        setReason('');
    };

    return (
        <div className="contact">
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>

                    <label>Name</label>
                    <input className="response" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label>Phone number</label>
                    <PhoneInput placeholder="Phone number" limitMaxLength={true} defaultCountry="IN" value={phone} onChange={setPhone} />

                    <label>Email</label>
                    <input className="response" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label>Date of birth</label>
                    <input className="response" type="date" placeholder="" value={date} onChange={(e) => setDate(e.target.value)} required />

                    <label>Address</label>
                    <textarea className="response" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>

                    <label>Why do you wish to volunteer here?</label>
                    <textarea className="response" placeholder="Reason for volunteering" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>

                    <button type="submit" className="send-btn" style={{ background: loader ? "rgba(10, 10, 10, 0.5)" : "rgba(0, 0, 0, 0)" }}>Submit</button>

                </form>
                <div className="map-title">
                    <h2 className="details-title">Find us at</h2>
                    <div className="filled-map"></div>                    
                </div>
                <div className="map-box">
                <iframe className="map" title="club location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.640759335346!2d73.880529!3d18.4546131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebddef2c093d%3A0xd65f963bf1957024!2sVIIT%20VOICE!5e0!3m2!1sen!2shk!4v1663995353738!5m2!1sen!2shk" />
                </div>
                    <div className="box-c">
                        <h3 className="details-title">Contact Details</h3>
                        <div className="filled-c"></div>
                    </div>
                    {/* Preformatted text providing bank details of the club */}
                    <pre className="contact-info">
                        Bhavin Sonar:<br />+91 7057326487
                        <br /><br />
                        Sagar Jangid:<br />+91 83692 87775
                    </pre>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
