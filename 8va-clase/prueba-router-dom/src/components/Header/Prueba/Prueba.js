import React, { Component } from 'react'

class Prueba extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor:''
        }
    }

    evitarSubmit(event){
        console.log(event)
        event.preventDefault()
    }

    guardarValor(event){
        this.setState({
            valor: event.target.value
        }, ()=> {
            //Aqui hariamos uso del metodo que llama al fetch.
        })
    }

  render() {
    return (
      <form onSubmit={(e)=> this.evitarSubmit(e)}>
        <input onChange={(e)=> this.guardarValor(e)} />
        <button>Submit</button>
      </form>
    )
  }
}

export default Prueba
