import photo from "./MS_AG_Sedding.jpg";
import style from "./Photo.module.css";

export default function Photo(){
    return(
        <div className={style.Photo}>
            <img src={photo} alt={"Mirjas Portfolio"} style={{borderRadius: "50px"}}/>
        </div>
    )
}