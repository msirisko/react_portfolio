import style from "./About.module.css";
import Photo from "./Photo/Photo";
import Text from "./Text/Text";

export default function About(){
    return(
        <div className={style.About}>
            <Photo />
            <Text />
        </div>

    )
}