import React from "react";
import Card from "./components/Card";
import { SkeletonCard } from "./components/SkeletonCard";
import useAnime from "./hooks/useAnime";

function Cards() {
    const { animeList, animeFetchLoading, animeFetchError } = useAnime();
    return (
        <section>
            {animeFetchError && <h3>An Error occured - {animeFetchError}</h3>}
            <div className="cards-wrapper">
                {animeFetchLoading &&
                    Array.from(Array(20).keys()).map((index) => <SkeletonCard key={index} />)}
                {animeList?.map((data) => (
                    <Card {...data} />
                ))}
            </div>
        </section>
    );
}

export default Cards;
