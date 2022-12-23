import "./css/style.css";
import Cards from "./Cards";
import Chart from "./Chart";
import AnimeContextProvider from "./contexts/animeContext";
import { Container } from "./components/Container";

function App() {
    return (
        <AnimeContextProvider>
            <Container>
                <Cards />
                <Chart />
            </Container>
        </AnimeContextProvider>
    );
}

export default App;
