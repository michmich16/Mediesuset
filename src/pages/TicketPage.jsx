import { Hero } from '../components/Hero/Hero';
import { TicketCard } from '../components/TicketCard/TicketCard';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useGet } from '../hooks/useGet';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import style from '../styles/ticketPage.module.scss';

export const TicketPage = () => {
    const { data, error, isLoading } = useGet('https://api.mediehuset.net/mediesuset/tickets');

    return (
        <>
            <Hero img="crowd1-foto-colourbox.jpg" imgPosition={'100% 80%'} />
            <SectionTitle title={"BILLETER"} />
            <MarginContainer>
                <div className={style.ticketContainer}>
                    <h3>PARTOUT BILLET - ALLE DAGE</h3>
                    {!isLoading && data?.items.map((item) => (
                        item.type === 'partout' &&
                        <TicketCard
                            key={item.id}
                            id={item.id}
                            ticket={item.name}
                            price={item.price}
                            ticketInfo={item.description}
                        />
                    ))}
                </div>
                <div className={style.ticketContainer}>
                    <h3>ENKELTBILLETTER</h3>
                    {!isLoading && data?.items.map((item) => (
                        item.type === 'single' &&
                        <TicketCard
                            key={item.id}
                            id={item.id}
                            ticket={item.name}
                            price={item.price}
                            ticketInfo={item.description}
                        />
                    ))}
                </div>
            </MarginContainer>
        </>
    );
};
