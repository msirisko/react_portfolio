import style from "./Contact.module.css";
import ContactForm from "./ContactForm/ContactForm";
import {useState, useEffect} from "react";
import {getAllContacts} from "./ContactForm/ContactApiService";
import {addContactToApi} from "./ContactForm/ContactApiService";
import Newsletter from "./Newsletter/Newsletter";

export default function Contact(){
    const [contacts, setContacts] = useState([]);

    useEffect(function () {
        loadContacts();
    }, []);

    async function loadContacts() {
        const apiContacts = await getAllContacts();
        setContacts(apiContacts);
    }

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