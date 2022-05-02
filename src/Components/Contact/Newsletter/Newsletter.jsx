import style from "./Newsletter.module.css";
import {useState} from "react";

export default function Newsletter({ sendDataOnSubmit }){
    const [email, setEmail] = useState("");
    function onEmailChange(event) {
        setEmail(event.target.value);
    }
    function onSubmit(event) {
        event.preventDefault();
        sendDataOnSubmit({
            email: email,
        });
        setEmail("");
    }

    return(
        <div className={style.Newsletter}>
            Abonniere jetzt meinen den Newsletter!
            <form onSubmit={onSubmit}>

                <input className={style.input}
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                    placeholder="Deine Email-Adresse"
                />
                <button className={style.Send}>Bestellen</button>

            </form>
        </div>

    )
}