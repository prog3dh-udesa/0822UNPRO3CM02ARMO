import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            valor:''
        }
    }

    evitarSubmit(event){
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valor: event.target.value
        },
        ()=> this.props.filtrar(this.state.valor)
        )
    }

    render() {
        return (
        <form onSubmit={(e) => this.evitarSubmit(e)}>
            <input onChange={(e) => this.guardarValor(e)} />
        </form>
        )
    }
}

export default Search
