import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PokemonList extends Component {

    state = {
        pokemons : []
    }

    // using async await here
    async componentDidMount(){
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        this.setState({
            pokemons: response.data.results
        })
    }


    render() {

        // Show a loading screen
        if (this.state.pokemons.length == 0) {
            return <p>Loading . . . </p>
        }

        return (
            <div>
                {
                    this.state.pokemons.map((pokemon, i) => {
                        return <p key={i}>
                            <Link to={`/pokemon/${i}`} >{pokemon.name}</Link>
                        </p>
                    })
                }
            </div>
        )
    }
}

export default PokemonList