import POKEMONS from "../data/mock-pokemon";
import axios, * as others from 'axios'

export default class PokemonServices {
    
    static async getAll() {
        try {
            const response = await axios.get('http://localhost:3000/pokemons');
            return new Promise((resolve, reject) => {
            if(!response) reject("No pokemons found")
            setTimeout(() => {
                resolve(response.data);
            },1000);
        });
          } catch (error) {
            console.error(error);
          }
    }

    static async getPokemon(pokeId){
        
        try {
            const response = await axios.get('http://localhost:3000/pokemons');
            return new Promise((resolve, reject) => {
                const pokemon=response.data.find(pokemon => pokemon.id === pokeId);
                if(!pokemon) reject("No pokemon found");
                setTimeout(() => {
                    resolve(pokemon);
                },500);
    
        });
          } catch (error) {
            console.error(error);
          }
    }

    static async updatePokemon(pokeId){
        
    }
}