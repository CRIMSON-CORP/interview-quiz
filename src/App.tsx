import { useState } from "react";
import "./App.css";
import AnimeContextProvider from "./contexts/animeContext";

function App() {
    const [count, setCount] = useState(0);

    return (
        <AnimeContextProvider>
            <h1>Anime</h1>
        </AnimeContextProvider>
    );
}

export default App;
