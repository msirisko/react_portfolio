import { useState } from 'react';
import style from "./ContactForm.module.css"

export default function ContactForm({ sendDataOnSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    function onSubjectChange(event) {
        setSubject(event.target.value);
    }
    function onMessageChange(event) {
        setMessage(event.target.value);
    }
    function onSubmit(event) {
        event.preventDefault();

        sendDataOnSubmit({
            name: name,
            email: email,
            subject: subject,
            message: message,
        });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className={style.ContactForm}>
        <form onSubmit={onSubmit}>
            <h2>Hinterlasse mir <br/> eine Nachricht!</h2>
            <div>Name: </div>
            <input
                name="name"
                type="text"
                value={name}
                onChange={onNameChange}
            />
            <div>Email: </div>
            <input
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={onEmailChange}
            />
            <div>Betreff: </div>
            <input
                name="subject"
                type="text"
                value={subject}
                onChange={onSubjectChange}
            />
            <div>Nachricht: </div>
            <textarea
                name="message"
                type="text"
                value={message}
                onChange={onMessageChange}
            />
            <br/>
            <button>Absenden</button>

        </form>
            </div>
    );

}
