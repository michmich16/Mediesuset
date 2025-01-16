import { FilterBar } from "../components/FilterBar/FilterBar";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import { SectionTitle } from "../components/SectionTitle/SectionTitle";
import { Hero } from "../components/Hero/Hero";
import { ProgramCard } from "../components/ProgramCard/ProgramCard";
import { useGet } from "../hooks/useGet";
import { ConvertTimeStampToDate } from "../helpers/ConvertTimeStampToDate";
import { useState } from "react";

export const ProgramPage = () => {
    const { data, isLoading } = useGet(
        `https://api.mediehuset.net/mediesuset/events`
    );

    const [selectedFilter, setSelectedFilter] = useState("ONSDAG");

    // Filter items by day
    const getFilteredItems = () => {
        if (!data?.items) return [];
        return data.items.filter((item) => {
            const dayName = new Date(item.datetime).toLocaleDateString("da-DK", {
                weekday: "long",
            }).toUpperCase();
            return dayName === selectedFilter;
        });
    };

    // Group items med .reduce https://dev.to/learnwithparam/how-to-group-an-array-of-objects-through-a-key-using-array-reduce-in-javascript-1lki
    const groupByScene = (items) => {
        const grouped = items.reduce((acc, item) => {
            const scene = item.stage_name; // Default scene if missing
            if (!acc[scene]) acc[scene] = [];
            acc[scene].push(item);
            return acc;
        }, {});
        return grouped;
    };

    const filteredItems = getFilteredItems();
    const groupedItems = groupByScene(filteredItems);

    return (
        <>
            <Hero img="crowd3-foto-colourbox.jpg" imgPosition={"100% 80%"} />
            <MarginContainer>
                <SectionTitle title={"PROGRAM"} />
                <FilterBar
                    filters={["ONSDAG", "TORSDAG", "FREDAG", "LØRDAG"]}
                    onFilterSelect={setSelectedFilter}
                />
                <GridContainer columns={1} paddingTop={"2rem"}>
                    {!isLoading &&
                        Object.keys(groupedItems).map((scene) => (
                            <ProgramCard
                                key={scene}
                                scene={scene}
                                items={groupedItems[scene]}
                            />
                        ))}
                    {isLoading && <p>Loading...</p>}
                </GridContainer>
            </MarginContainer>
        </>
    );
};
