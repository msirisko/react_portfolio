import style from "./Accordion.module.css";


export default function Accordion(){
    return(
        <div className={style.Accordion}>
            <div className="list">
                <input type="checkbox" id="title1"/>
                <label htmlFor="title1">Wer bin ich?</label>

                <div className="content">
                    <p>Ich bin ich, bin ich, bin ich, bin ich, bin ich, bin ich, bin ich, bin ich,
                        bin ich, bin ich, bin ich, bin ich, bin ich, bin ich, bin ich.</p>
                </div>

                <input type="checkbox" id="title2"/>
                <label htmlFor="title2">Was mache ich?</label>

                <div className="content">
                    <p>Ich fülle besonders gerne und mit unbändiger Freude Textfelder mit
                        Fülltexten.</p>
                </div>

                <input type="checkbox" id="title3"/>
                <label htmlFor="title3">Wie mache ich es?</label>

                <div className="content">
                    <p>Jetzt fällt mir tatsächlich langsam gar nichts mehr ein, was ich noch
                        schreiben könnte...</p>
                </div>
                <input type="checkbox" id="title4"/>
                <label htmlFor="title4">Was ist meine Motivation?</label>

                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy
                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                        et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet.</p>
                </div>

            </div>
        </div>

    )
}