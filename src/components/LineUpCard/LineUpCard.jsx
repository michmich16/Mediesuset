import style from "./LineUpCard.module.scss";

export const LineUpCard = ({ title, img, date, stageName }) => {
    const getBackgroundColor = (stageName) => {
        // console.log("Stage Name:", stageName);
        switch (stageName?.toUpperCase()) {
            case "RØD SCENE":
                return "#E9485B";
            case "BLÅ SCENE":
                return "#4A6FBF";
            case "GRØN SCENE":
                return "#54A047";
            case "LILLA SCENE":
                return "#A12E8F";
            default:
                return "gray"; //render grå farve hvis ingen stage name
        }
    };

    return (
        <figure
            className={style.lineUpCard}
            style={{ backgroundColor: getBackgroundColor(stageName) }}
        >
            <img src={img} alt={title} />
            <figcaption>
                <h3>{title}</h3>
                <p>{date}</p>
            </figcaption>
        </figure>
    );
};
