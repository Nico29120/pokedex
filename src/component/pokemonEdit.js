import { useEffect, useState } from 'react';
import PokemonService from '../services/pokemon-services';
import { useParams, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

export default function PokemonEdit(){
    let { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    
    useEffect(() => {
        PokemonService.getPokemon(+id).then(pokemon => setPokemon(pokemon));
      }, [id]);
    
    const onSubmit = data => console.log(data);

    const {register, handleSubmit, reset}= useForm({
        defaultValue: {
            name: 'default',
            number: 'default',
            type: [],
        }
    })

    useEffect(() => {
        if (pokemon) {
            reset({
                name: pokemon.name,
                number: pokemon.id,
                type: pokemon.types,
            });
        }
    }, [pokemon]);

    return(

        <div>
            { pokemon ? (
            <div key={pokemon.id}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Pokemon Form</h1>
                <input {...register("name")} placeholder="Nom"></input>
                <input {...register("number")} placeholder="Numéro"></input>
                <input {...register("type")} placeholder="Type(s)"></input>

                <input type="submit" />
            </form>
            
            <Link to="/"> Retour </Link>
            </div>   
        
        ) : (
            
            <></>
            
        )}
        </div>
    )
}
