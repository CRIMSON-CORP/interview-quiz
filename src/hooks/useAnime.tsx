import { useContext } from "react";
import { AnimeContext, AnimeContextShape } from "../contexts/animeContext";

function useAnime() {
    return useContext<AnimeContextShape | null>(AnimeContext);
}

export default useAnime;
