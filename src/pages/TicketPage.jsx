import { Hero } from '../components/Hero/Hero';
import { TicketCard } from '../components/TicketCard/TicketCard';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useGet } from '../hooks/useGet';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import style from '../styles/ticketPage.module.scss';

export const TicketPage = () => {
    const { data, error, isLoading } = useGet('https://api.mediehuset.net/mediesuset/tickets');

    // Group items med .reduce https://dev.to/learnwithparam/how-to-group-an-array-of-objects-through-a-key-using-array-reduce-in-javascript-1lki
    // const groupByType = (items) => {
    //     const grouped = items.reduce((acc, item) => {
    //         const type = item.type; // Default type hvis der mangler
    //         if (!acc[type]) acc[type] = [];
    //         acc[type].push(item);
    //         return acc;
    //     }, {});
    //     return grouped;
    // };

    return (
        <>
            <Hero img="crowd1-foto-colourbox.jpg" imgPosition={'100% 80%'} />
            <SectionTitle title={"BILLETER"} />
            <MarginContainer>
                {/* props: ticket, price, type */}
                {/* {!isLoading &&
                        data?.items.filter((item) => item.type ==='partout').map((item) => (
                            <TicketCard
                                ticket={item.name}
                                price={item.price}
                            />
                        ))}
                    {isLoading && <p>Loading...</p>} */}
                <div className={style.ticketContainer}>
                    <h3>PARTOUT BILLET - ALLE DAGE</h3>
                    {!isLoading && data?.items.map((item) => (
                        item.type === 'partout' &&
                        <TicketCard
                            key={item.id}
                            ticket={item.name}
                            price={item.price}
                            type={item.type}
                            items={item.items}
                        />
                    ))}
                </div>
                <div className={style.ticketContainer}>
                    <h3>ENKELTBILLETTER</h3>
                    {!isLoading && data?.items.map((item) => (
                        item.type === 'single' &&
                        <TicketCard
                            key={item.id}
                            ticket={item.name}
                            price={item.price}
                            type={item.type}
                            items={item.items}
                        />
                    ))}
                </div>
            </MarginContainer>
        </>
    );
};