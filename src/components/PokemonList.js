import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


function PokemonList() {

    const [pokemons, updatePokemons] = useState([])

    // using async await here
    // This is your componentDidMount
    useEffect(async () => {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        updatePokemons(response.data.results)
    }, [])

    // Show a loading screen
    if (pokemons.length == 0) {
        return <p>Loading . . . </p>
    }

    return (
        <div>
            {
                pokemons.map((pokemon, i) => {
                    return <p key={i}>
                        <Link to={`/pokemon/${i}`} >{pokemon.name}</Link>
                    </p>
                })
            }
        </div>
    )
}


export default PokemonList