import { ConvertTimeStampToDate } from '../../helpers/ConvertTimeStampToDate';
import style from './ProgramCard.module.scss';


export const ProgramCard = ({ scene, items }) => {
    return (
        <section className={style.programCardStyle}>
            <div>
                <h3>{scene}</h3>
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <p>
                            {ConvertTimeStampToDate(item.datetime)}
                        </p>
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};
