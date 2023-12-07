// Display title and image of Pokemon data
// Data comes from props

export default function PokemonInfoCard(props) {
  return (
    <div className="pokemonInfoCard">
      <h1>{props.name}</h1>
      <img src={props.imageUrl} alt="Default front sprite from PokeAPI" />
    </div>
  );
}
