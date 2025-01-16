import style from './FilterBar.module.scss';

export const FilterBar = ({ filters }) => {
    return (
        <div className={style.filterBarStyle}>
            <ul>
                {filters.map((filter, index) => (
                    <li key={index}>{filter}</li>
                ))}
            </ul>
        </div>
    );
};
