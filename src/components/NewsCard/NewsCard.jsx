import style from "./NewsCard.module.scss";

export const NewsCard = ({ img, title, text, link }) => {
    return (
        <div className={style.newsCard}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{text.slice(0, 100)}...</p>
            <a href={link}>Læs mere</a>
        </div>
    );
}