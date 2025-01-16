import { Hero } from '../components/Hero/Hero';
import { TicketCard } from '../components/TicketCard/TicketCard';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import {useGet} from '../hooks/useGet';

export const TicketPage = () => {
    return (
        <>
            <Hero img="crowd1-foto-colourbox.jpg" imgPosition={'100% 80%'}/>
            <SectionTitle title={"BILLETER"}/>
        </>
    );
};