import style from "./FilterBar.module.scss";

export const FilterBar = ({ filters, onFilterSelect }) => {
    return (
        <div className={style.filterBarStyle}>
            <ul>
                {filters.map((filter) => (
                    <li
                        key={filter}
                        onClick={() => onFilterSelect(filter)}
                        className={style.filterItem}
                    >
                        {filter}
                    </li>
                ))}
            </ul>
        </div>
    );
};
