import { Pokemon } from "./pokemon";

export class Pokedex {
    private _pokemons : Pokemon[];

    constructor() {
        this._pokemons = []
    }

    addPokemon(nuevo : Pokemon) {
        this._pokemons.push(nuevo);
    }

    checkTipo(tipo : string) : Pokemon[] | undefined {
        let resultado : Pokemon[] = [];
        this._pokemons.forEach(pokemon => {
            if (pokemon.tipo === tipo) {
                resultado.push(pokemon);
            }
        })
        return resultado.length === 0 ? undefined : resultado;
    }
}
