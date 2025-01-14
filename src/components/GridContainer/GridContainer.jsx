import style from "./GridContainer.module.scss";

export const GridContainer = ({ children, columns, sx, gap }) => {
    const inlinestyle ={
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap:`${gap}`,
    }

    return(
        <div className={style.grid} style={{...inlinestyle, ...sx}}>
            {children}
        </div>
    );
}