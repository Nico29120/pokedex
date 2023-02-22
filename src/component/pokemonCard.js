import PropTypes from "prop-types";
import { useState } from "react";
import { formatDate } from "../helpers/format-date";
import { formatType } from "../helpers/format-type";
import { Outlet, Link } from "react-router-dom";

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        hp: PropTypes.number.isRequired,
        cp: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        // created: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
}

export default function PokemonCard({pokemon}) {
    const [color, setColor] = useState('#f5f5f5');
    const showBorder = (pokemonId) => {
        setColor('#fe1b00');
    };
     
    const hideBorder = (pokemonId) => {
        setColor('#f5f5f5');
    };
    return (
        <div 
        className="col s12 m6 l4" 
        key={pokemon.id} 
        onMouseEnter={() => showBorder()} 
        onMouseLeave={() => hideBorder()}
        >
            <div 
                className="card horizontal" 
                style={{ borderColor: color }} 
            >
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                    <span className="card-title">{pokemon.name}</span>
                </div>  
                <div className="card-content">
                    <p>#{pokemon.id} {pokemon.name}</p>
                    <p><small>{pokemon.created}</small></p>
                    {pokemon.types.map(type => (
                        <span key={type} className={formatType(type)}>{type}</span>
                    ))}
                    <Link to={`pokemon/${pokemon.id}`} key={pokemon.id}>Détails</Link>
                </div>
            </div>
        </div>

    );
}