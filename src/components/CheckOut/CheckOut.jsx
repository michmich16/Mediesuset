import style from './CheckOut.module.scss';

export const CheckOut = ({ ticket, ticketInfo, quantity, unitPrice, sumPrice }) => {
    return (
        <section>
            <div>
                <h2>INFOMATION OM DEN VALGTE BILLET</h2>
                <span>
                    <h3>{ticket}</h3>
                    <p>{ticketInfo}</p>
                </span>
            </div>
            <div>
                <h2>BESTILLING</h2>
                <span>
                    <p>{quantity}</p>
                    <p>{ticket}</p>
                    <p>{unitPrice}</p>
                    <p>{sumPrice}</p>
                </span>

            </div>
        </section>
    )
}