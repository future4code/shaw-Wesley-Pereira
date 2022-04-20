import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

 function PokeCard (props) {
  
    const [pokemonNome, setPokemonNome] = useState({});
  

  
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [  props.pokemon ]);



  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        
        setPokemonNome(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  

    return (
      <div>
        <p>{pokemonNome.name}</p>
        <p>{pokemonNome.weight ? `${pokemonNome.weight} KG ` :``} </p>
        {pokemonNome.types && <p>{pokemonNome.types[0].type.name}</p>}
        {pokemonNome.sprites && (
          <img src={pokemonNome.sprites.front_default} alt={pokemonNome.name} />
        )}
      </div>
    );
  
}

export default PokeCard;
