import { useState, useEffect } from "react";
import PokemonCard from "../component/pokemonCard";
import PokemonServices  from "../services/pokemon-services";
import "../component/pokemonCard.css";
import Loader from "../component/loader";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState(null);
    useEffect(() => {
/*
        async function getPokemons() {
            const pokemons = await PokemonServices.getAll();
            setPokemons(pokemons);
        }
        getPokemons();
        OU .....
*/
        (async () => {
            const pokemons = await PokemonServices.getAll();
            setPokemons(pokemons);
        })();
    }, []);

    return (
        <div>
            <h1 className="center" >Pokédex</h1>
            <div className="container"> 
                <div className="row" > 
                    {pokemons? 
                        (pokemons.map(pokemon => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        )))
                    : <h4 className="center"><Loader /></h4>  } 
                </div>
            </div>
        </div> 
    );
}