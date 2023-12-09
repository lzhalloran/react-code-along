// Display title and image of Pokemon data
// Data comes from props

import { useContext } from "react";
import { PokemonTeamContext } from "../contexts/PokemonDataProvider";

export default function PokemonInfoCard(props) {
  let { team, setTeam } = useContext(PokemonTeamContext);

  const deletePokemonFromTeam = (providedId) => {
    // find and delete pokemon with matching ID from team context
    let teamCopy = JSON.parse(JSON.stringify(team));
    teamCopy = teamCopy.filter((obj) => {
      return obj.id !== providedId;
    });

    // set the updated team to context
    setTeam(teamCopy);
  };

  return (
    <div className="pokemonInfoCard">
      <h1>{props.name}</h1>
      <img src={props.imageUrl} alt="Default front sprite from PokeAPI" />
      <button onClick={(event) => deletePokemonFromTeam(props.pokemonId)}>
        Delete
      </button>
    </div>
  );
}
