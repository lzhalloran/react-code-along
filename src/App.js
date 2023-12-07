import "./App.css";
import { ApiSearchForm } from "./components/ApiSearchForm";
import PokemonTeamDisplay from "./components/PokemonTeamDisplay";

function App() {
  return (
    <div className="App">
      <ApiSearchForm />

      <PokemonTeamDisplay />
    </div>
  );
}

export default App;
