import React, { createContext, useState, useEffect, ReactNode, useMemo } from "react";

export type AnimeApiDataShape = {
    rank: number;
    image: string;
    title: string;
    release_date?: string;
    lastest_date?: string;
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
    const [animeList, setAnimeList] = useState<[]>([]);
    const [animeFetchLoading, setAnimeFetchLoading] = useState<boolean>(true);
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
