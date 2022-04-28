import style from "./Subscribe.module.css";

export default function Subscribe(){
    return(
        <div className={style.Subscribe}>
            <div className="Subscribe">
                <div className="subform">
                    <div className="selection">
                        Abonniere jetzt meinen kostenlosen Newsletter!<br/>
                        Ich möchte den Newsletter:
                        <select className="frecuency">
                            <option value="0" selected>täglich</option>
                            <option value="1">wöchentlich</option>
                            <option value="2">monatlich</option>
                        </select>
                        <div className="well">
                            <form action="#">
                                <div className="input-group">
                                    <input className="btn btn-sm border-dark" name="email" id="email" type="email"
                                           placeholder="Deine Email-Adresse" required/>
                                        <button className="btn btn-info btn-dark type='submit'">Absenden</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}