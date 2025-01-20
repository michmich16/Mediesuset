import { Hero } from '../components/Hero/Hero';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { NewsCard } from '../components/NewsCard/NewsCard';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useGet } from '../hooks/useGet';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';
import { NavLink } from 'react-router-dom';

export const CampsPage = () => {

    const { data, isLoading, error } = useGet(
        `https://api.mediehuset.net/mediesuset/camps`
    );

    return (
        <>
                        <Hero img="crowd3-foto-colourbox.jpg" imgPosition={'100% 80%'}/>
                        <SectionTitle title={"CAPMS"} />
            <MarginContainer>
                <GridContainer columns={3} gap={"3rem"}>
                    {!isLoading && data?.items
                        .map((item) => {
                            return (
                                <NewsCard
                                    key={item.id}
                                    img={item.image}
                                    title={item.name}
                                    text={item.description}
                                />
                            );
                        })}
                </GridContainer>
            </MarginContainer>

        </>
    );
};