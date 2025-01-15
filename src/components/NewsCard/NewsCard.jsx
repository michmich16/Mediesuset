import style from "./NewsCard.module.scss";
import { NavLink } from "react-router-dom";

export const NewsCard = ({ img, title, text, link }) => {
    return (
        <div className={style.newsCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{text.slice(0, 100)}...</p>
            <NavLink to={link}>Læs Mere</NavLink>
        </div>
    );
}