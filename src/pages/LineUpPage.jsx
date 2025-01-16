import { FilterBar } from "../components/FilterBar/FilterBar"
import { GridContainer } from "../components/GridContainer/GridContainer"
import { MarginContainer } from "../components/MarginContainer/MarginContainer"
import { SectionTitle } from "../components/SectionTitle/SectionTitle"
import { Hero } from '../components/Hero/Hero';
import { LineUpCard } from "../components/LineUpCard/LineUpCard";
import { useGet } from "../hooks/useGet";

export const LineUpPage = () => {

    const { data, isLoading, error } = useGet(
        `https://api.mediehuset.net/mediesuset/events`
    );
    return (
        <>
           <Hero img="crowd3-foto-colourbox.jpg" imgPosition={'100% 80%'} />
        <MarginContainer>
        <SectionTitle title={"LINE UP"}/>
        <FilterBar filters={["A-Å" , "RØD SCENE" , "BLÅ SCENE" , "GRØN SCENE" , "LILLA SCENE"]}/>
        <GridContainer columns={3} gap={"3rem"}>
                    {!isLoading && data?.items
                        .map((item) => {
                            return (
                                <LineUpCard
                                    key={item.id}
                                    img={item.image}
                                    title={item.title}
                                    date={item.datetime}
                                />
                            );
                        })}
                </GridContainer>
        </MarginContainer>
        </>
    )
}