import { useState } from "react";
import POKEMONS from "../../data/mock-pokemon"



const pokeArray = POKEMONS;

export default function Pokemons (){
    
    return(
        <>
            <div>
                {pokeArray.map((pokemon , key) => <Pokemon key={key} pokemon={pokemon}/>)}
            </div>
        </>
    )
}

function Pokemon ({pokemon}){

    const [activeId, setActiveID] = useState(0);

    const { id , name , picture , types } = pokemon;

    return(
        <div className="row">
            <div className="col s12 m5 14">
                <div onMouseEnter={() => setActiveID(id)} key={id} className={activeId === id ? "card hover" : "card"} onMouseLeave={() => setActiveID(0)}>
                    <div className="card-image">
                        <img src={picture} alt=""/>
                        <span className="card-title black-text">{name} #{id}</span>
                        <a href="#" className="btn-floating halfway-fab waves-effect waves-light red" onClick={() => console.log(`name : ${pokemon.name} hp :  ${pokemon.hp}   cp :   ${pokemon.cp}`)}> <i className="medium material-icons">+</i> </a>
                        <div className="card-content">
                            
                        </div>
                    </div>
                    <div className="card-action">
                        <p>{types.map((type) => <span className= {ColorBadge (type)} > {type} </span>)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ColorBadge (types){
    
    const type = types

    switch(type) {
        case 'Eau':
            return 'badge eau white-text';
        case 'Electrik':
            return 'badge electrik white-text';
        case 'Fée':
            return 'badge fée white-text';
        case 'Feu':
            return 'badge feu white-text';
        case 'Insecte':
            return 'badge insecte white-text';
        case 'Normal':
            return 'badge normal white-text';
        case 'Plante':
            return 'badge plante white-text';
        case 'Poison':
            return 'badge poison white-text';
        case 'Vol':
            return 'badge vol white-text';
        default:
          return 'badge';
      }    
}

// function Details {

// }