import React, { createContext, useState, useEffect, ReactNode, useMemo } from "react";

export type AnimeContextShape = {
    animeList: [] | null;
    animeFetchLoading: boolean;
    animeFetchError: string | null;
};

export const AnimeContext = createContext<AnimeContextShape | null>(null);

export type AnimeContextProviderProps = {
    children: ReactNode;
};

const AnimeContextProvider: React.FC<AnimeContextProviderProps> = ({ children }) => {
    const [animeList, setAnimeList] = useState<[] | null>(null);
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
