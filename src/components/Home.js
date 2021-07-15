import React, { Component } from 'react'

class Home extends Component {
    render() {
        console.log('Home props', this.props)
        return (
            <div>
                Yayy My home page  { this.props.match.params.myName }
            </div>
        )
    }
}

export default Home