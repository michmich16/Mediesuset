import { useNavigate } from 'react-router-dom';
import { useTicket } from '../../contexts/ticketContext';
import style from './TicketCard.module.scss';

export const TicketCard = ({ ticket, price, id, ticketInfo }) => {
    const navigate = useNavigate();
    const { setSelectedTicket } = useTicket();

    const handleBuyClick = () => {
        setSelectedTicket({ id, name: ticket, price });
        navigate('/checkout');
    };

    return (
        <section className={style.ticketCardStyle}>
            <div>
                <ul>
                    <li>{ticket}</li>
                    <li>{price} DKK</li>
                </ul>
                <button onClick={handleBuyClick}>KØB BILLET</button>
            </div>
        </section>
    );
};
