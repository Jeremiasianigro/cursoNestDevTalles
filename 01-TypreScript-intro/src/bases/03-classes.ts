import axios from "axios"
import type {Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";


export class Pokemon {


    get imageUrl() : string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number, 
        public name: string
    ) {}

    scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    speak(){
        console.log(`${this.name}, ${this.name}`)
    }

    async getMoves() : Promise<Move[]>{

        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

        console.log(data.moves)

        return data.moves

    }
}

export const charmander = new Pokemon(4, 'Charmander')

// console.log(charmander)

// charmander.scream();
// charmander.speak();

// charmander.name = 'Mew'
// charmander.id = 10

charmander.getMoves();