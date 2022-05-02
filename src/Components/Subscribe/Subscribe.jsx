import style from "./Subscribe.module.css";



export default function Subscribe(){
    return(
        <div className={style.Subscribe}>
                <div className={style.subform}>
                    <div className={style.selection} >
                        Abonniere jetzt meinen kostenlosen Newsletter!<br/>
                        Ich möchte den Newsletter:&nbsp;&nbsp;
                        <select className={style.frequency}>
                            <option value="0" selected>täglich</option>
                            <option value="1">wöchentlich</option>
                            <option value="2">monatlich</option>
                        </select>
                        <br/>
                        <br/>
                        <div className="well" style={{backgroundColor: "white", border: "none"}}>
                            <form action="#">
                                <div className="input-group" >
                                    <input className="btn btn-sm" name="email" id="email" type="email"
                                           placeholder="Deine Email-Adresse" required  style={{borderColor: "black"}}/>
                                        <button className="btn btn-dark btn-dark type='submit'" >Absenden</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>

    )
}