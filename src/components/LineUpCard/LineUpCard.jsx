import style from './LineUpCard.module.scss';

export const LineUpCard = ({ title, img, date }) => {
    return(
        <>
        <figure className={style.lineUpCard}>
            <img src={img} alt={title}/>
            <figcaption>
                <h3>{title}</h3>
                <p>{date}</p>
            </figcaption>
        </figure>
        </>
    )
}