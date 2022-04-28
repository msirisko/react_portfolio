import style from "./Links.module.css";
import Button from "./Button/Button";

export default function Links({label}){
    return(
        <div className={style.Links}>
            <Button label={"Twitter"} link={"http://www.twitter.com"}/>
            <Button label={"LinkedIn"} link={"http://www.linkedin.com"}/>
            <Button label={"Xing"} link={"http://www.xing.com"}/>
            <Button label={"Email"} link={"mailto:mirja.sirisko@adesso.de"}/>
        </div>

    )
}
