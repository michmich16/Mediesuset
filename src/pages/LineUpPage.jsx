import { FilterBar } from "../components/FilterBar/FilterBar";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { Hero } from "../components/Hero/Hero";
import { LineUpCard } from "../components/LineUpCard/LineUpCard";
import { useGet } from "../hooks/useGet";
import { ConvertTimeStampToDate } from "../helpers/ConvertTimeStampToDate";
import { useState } from "react";

export const LineUpPage = () => {
    const { data, isLoading } = useGet(
        `https://api.mediehuset.net/mediesuset/events`
    );

    const [selectedFilter, setSelectedFilter] = useState("A-Å");

    // Filter and sort logic
    const getFilteredItems = () => {
        if (!data?.items) return [];

        switch (selectedFilter) {
            case "A-Å":
                return [...data.items].sort((a, b) =>
                    a.title.localeCompare(b.title, "da") //da for æøå
                ); // Sort alfabetisk
            case "RØD SCENE":
            case "BLÅ SCENE":
            case "GRØN SCENE":
            case "LILLA SCENE":
                return data.items.filter(
                    (item) =>
                        item.stage_name &&
                        item.stage_name.toUpperCase() === selectedFilter
                ); 
            default:
                return data.items; 
        }
    };

    const filteredItems = getFilteredItems();

    return (
        <>
            <Hero img="crowd3-foto-colourbox.jpg" imgPosition={"100% 80%"} />
            <MarginContainer>
                <SectionTitle title={"LINE UP"} />
                <FilterBar
                    filters={["A-Å", "RØD SCENE", "BLÅ SCENE", "GRØN SCENE", "LILLA SCENE"]}
                    onFilterSelect={setSelectedFilter} // Pass filter selection callback
                />
                <GridContainer columns={3} gap={"3rem"} paddingTop={"2rem"}>
                    {!isLoading &&
                        filteredItems.map((item) => (
                            <LineUpCard
                                key={item.id}
                                img={item.image}
                                title={item.title}
                                date={ConvertTimeStampToDate(item.datetime)}
                                stageName={item.stage_name}
                            />
                        ))}
                </GridContainer>
            </MarginContainer>
        </>
    );
};
