import Header from "./Components/Header/Header.jsx";
import About from "./Components/About/About.jsx";
import Info from "./Components/Info/Info.jsx";
import Accordion from "./Components/Accordion/Accordion"
import Subscribe from "./Components/Subscribe/Subscribe.jsx";
import Links from "./Components/Links/Links.jsx";
import ContactForm from "./Components/Contact/ContactForm";
import {useState, useEffect} from "react";
import {getAllContacts} from "./Components/Contact/ContactApiService";
import {addContactToApi} from "./Components/Contact/ContactApiService";


function App() {
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
        // Single Responsibility Principle
        addContactToApi(contact);
    }


    return <>
      <div className="App">
          <Header />
          <About />
          <Info />
          <Accordion />
          <ContactForm sendDataOnSubmit={addContact} />
          <Subscribe />
          <Links />

      </div>
      </>
}

export default App;
