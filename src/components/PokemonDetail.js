import React, { Component } from 'react'
import axios from 'axios'

class PokemonDetail extends Component {

    state = {
        pokemonDetail: null,
    }

    getData = async () => {
        // incrementing the id because pokemon ids start from 1
        let id = Number(this.props.match.params.pokemonIndex) + 1
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        // we save the pokemon id as well to be checked later in our componentDidUpdate 
        let pokemon = {
            id: this.props.match.params.pokemonIndex,
            height : response.data.height,
            weight: response.data.weight,
            image: response.data.sprites.other.dream_world.front_default
        }
        this.setState({
            pokemonDetail: pokemon
        })
    }

    componentDidMount(){
        console.log('Detail MOUNTED')
        this.getData()
    }

    componentDidUpdate(){
        let newId = this.props.match.params.pokemonIndex
        let stateId = this.state.pokemonDetail.id
        // compare the id in the state with the id in the props
        if(newId !== stateId) {
            this.getData() // setState
        }
    }

    render() {
        console.log('Detail RENDERED')
        if (!this.state.pokemonDetail) {
            return <p>Loading Details. . . </p>
        }

        const {pokemonDetail} = this.state

        return (
            <div>
                PokemonDetail page
                <h4>Height: { pokemonDetail.height}</h4>
                <img src={pokemonDetail.image} />
            </div>
        )
    }
}

export default PokemonDetail