import style from "./Contact.module.css"
import ContactForm from "./ContactForm/ContactForm";
import Newsletter from "./Newsletter/Newsletter";
import useContacts from "./useContacts";

export default function Contact(){
    const [contacts, addContact] = useContacts();

    return(
        <div className={style.Contact}>
            <ContactForm sendDataOnSubmit={addContact} />
            <Newsletter sendDataOnSubmit={addContact}/>
        </div>

    )
}