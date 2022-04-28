import style from "./Header.module.css";
import Banner from "./Banner.jpg";

export default function Header(){
    return(
        <div className={style.Header}>
            <img src={Banner} width={"80%"} alt={"Mirjas Portfolio"}/>
        </div>
)

}