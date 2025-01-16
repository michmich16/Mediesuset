import style from './TicketCard.module.scss';

export const TicketCard = ({ ticket, price, type }) => {
    return(
        <>
        <section className={style.ticketCardStyle}>
            <span>
                <h2>{type}</h2>
            </span>
            <div>
            <ul>
                <li>{ticket}</li>
                <li>{price}</li>
            </ul>
            <button>KØB BILLET</button>
            </div>

        </section>
        </>
    )
}