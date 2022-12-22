import { useState } from "react";
import "./css/style.css";
import Cards from "./Cards";
import AnimeContextProvider from "./contexts/animeContext";
import { Container } from "./components/Container";

function App() {
    return (
        <AnimeContextProvider>
            <Container>
                <Cards />
            </Container>
        </AnimeContextProvider>
    );
}

export default App;
