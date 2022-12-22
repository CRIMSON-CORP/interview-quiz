import React, { createContext, useState, useEffect, ReactNode, useMemo } from "react";

export type AnimeApiDataShape = {
    mal_id: number;
    rank: number;
    image: string;
    title: string;
    release_date?: string;
    lastest_date?: string | null;
    rating: string;
};

export type AnimeContextShape = {
    animeList: AnimeApiDataShape[];
    animeFetchLoading: boolean;
    animeFetchError: string | null;
};

export const AnimeContext = createContext<AnimeContextShape>({
    animeList: [],
    animeFetchLoading: true,
    animeFetchError: null,
});

export type AnimeContextProviderProps = {
    children: ReactNode;
};

const AnimeContextProvider: React.FC<AnimeContextProviderProps> = ({ children }) => {
    const [animeList, setAnimeList] = useState<AnimeApiDataShape[]>([
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
        {
            mal_id: 44567,
            image: "https://cdn.myanimelist.net/images/anime/1410/113950.webp",
            rank: 3,
            rating: "PG-13 - Teens 13 or older",
            title: "One Piece",
            release_date: new Date("1996-01-08T00:00:00+00:00").toLocaleDateString(),
            lastest_date: null,
        },
    ]);
    const [animeFetchLoading, setAnimeFetchLoading] = useState<boolean>(false);
    const [animeFetchError, setAnimeFetchError] = useState<string | null>(null);

    const contextValues: AnimeContextShape = useMemo(
        () => ({
            animeList,
            animeFetchLoading,
            animeFetchError,
        }),
        [animeList, animeFetchLoading, animeFetchError]
    );

    return <AnimeContext.Provider value={contextValues}>{children}</AnimeContext.Provider>;
};

export default AnimeContextProvider;
