import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PokemonDetail(props) {
    const [pokemonDetail, updatepokemonDetail] = useState(null)

    const getData = async () => {
        // incrementing the id because pokemon ids start from 1
        let id = Number(props.match.params.pokemonIndex) + 1
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // we save the pokemon id as well to be checked later in our componentDidUpdate 
        let pokemon = {
            id: props.match.params.pokemonIndex,
            height : response.data.height,
            weight: response.data.weight,
            image: response.data.sprites.other.dream_world.front_default
        }
        updatepokemonDetail(pokemon)
    }
    // Behaves as your componentDidUpdate 

    // IMPORTANT:  In hooks it runs this `useEffect` after every render, no matter what. 
    // So this will behave as your componentDidUpdate.  
    useEffect(() => {
        let newId = props.match.params.pokemonIndex
        let stateId = pokemonDetail ? pokemonDetail.id : null
        // compare the id in the state with the id in the props
        if(newId !== stateId) {
            getData() 
        }
    })

    console.log('Detail RENDERED')
    if (!pokemonDetail) {
        return <p>Loading Details. . . </p>
    }

    return (
        <div>
            PokemonDetail page
            <h4>Height: { pokemonDetail.height}</h4>
            <img src={pokemonDetail.image} />
        </div>
    )
    
}


export default PokemonDetail