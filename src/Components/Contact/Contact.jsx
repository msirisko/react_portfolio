import style from "./Contact.module.css";
import ContactForm from "./ContactForm/ContactForm";
import {useState} from "react";
import {addContactToApi} from "./ContactForm/ContactApiService";
import Newsletter from "./Newsletter/Newsletter";

export default function Contact(){
    const [contacts, setContacts] = useState([]);

    function addContact(contact) {
        setContacts([contact, ...contacts]);
        addContactToApi(contact);
    }

    return(
        <div className={style.Contact}>
            <ContactForm sendDataOnSubmit={addContact} />
            <Newsletter sendDataOnSubmit={addContact}/>
        </div>

    )
}