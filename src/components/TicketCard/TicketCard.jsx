import style from './TicketCard.module.scss';

export const TicketCard = ({ ticket, price }) => {
    return (
        <>
            <section className={style.ticketCardStyle}>
                <div>
                    <ul>
                        <li>{ticket}</li>
                        <li>{price} DKK</li>
                    </ul>
                        <button>KØB BILLET</button>
                </div>
            </section>
        </>
    )
}
