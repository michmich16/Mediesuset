import { Hero } from '../components/Hero/Hero';
import { GridContainer } from '../components/GridContainer/GridContainer';
import { NewsCard } from '../components/NewsCard/NewsCard';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';
import { useGet } from '../hooks/useGet';
import { MarginContainer } from '../components/MarginContainer/MarginContainer';

export const FrontPage = () => {

    const { data, isLoading, error } = useGet(
        `https://api.mediehuset.net/mediesuset/news`
    );

    return (
        <>
            <Hero img="crowd3-foto-colourbox.jpg" imgPosition={'100% 80%'} />
            <SectionTitle title={"NYHEDER"} />
            <MarginContainer>
                <GridContainer columns={3} gap={"3rem"}>
                    {!isLoading && data?.items
                        .sort(() => Math.random() - 0.5)  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#:~:text=A%20very%20simple%20way%20for,random()%20%2D%200.5)%3B
                        .slice(0, 6)
                        .map((item) => {
                            return (
                                <NewsCard
                                    key={item.id}
                                    img={item.image}
                                    title={item.title}
                                    text={item.teaser}
                                    link={`/news/${item.id}`}
                                />
                            );
                        })}
                </GridContainer>
            </MarginContainer>

        </>
    );
};
