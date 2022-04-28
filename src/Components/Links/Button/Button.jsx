import style from "./Button.module.css";
import PropTypes from "prop-types";

export default function Links({label, link}){
    return(
        <div className={style.Button}>
            <a  href={link}>
                <button>{label}</button>
            </a>
        </div>

    )
}


Links.propTypes={
    label: PropTypes.string,
    link: PropTypes.string
}
