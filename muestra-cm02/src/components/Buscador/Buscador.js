import React, { Component } from 'react'

class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput:'',
            tipoDeBusqueda:'album',
        }
    }

    preventSubmit(event){
        event.preventDefault()
    }

    controlarInput(event){
      if(event.target.id === 'inputSearch'){
          this.setState({
              valorInput: event.target.value
            }, 
            ()=> this.props.funcionQueBusca(this.state.valorInput, this.state.tipoDeBusqueda))
      } else {
        this.setState({
          tipoDeBusqueda: event.target.value
          }, 
          ()=> this.props.funcionQueBusca(this.state.valorInput, this.state.tipoDeBusqueda))
      }
    }

  render() {
    return (
      <form onSubmit={(event)=> this.prevenirSubmit(event)}>
        <input type='text' id='inputSearch' onChange={(event)=> this.controlarInput(event)} value={this.state.valorInput}/>
        <label htmlFor='album'>
          <input checked={this.state.tipoDeBusqueda === 'album'} id='album' type='radio' name='tipoDeBusqueda' onChange={(event) => this.controlarInput(event)} value='album' />
          Album
        </label>
        <label htmlFor='artist'>
          <input checked={this.state.tipoDeBusqueda === 'artist'} id='artist' type='radio' name='tipoDeBusqueda' onChange={(event) => this.controlarInput(event)} value='artist' />
          Artist
        </label>
      </form>
    )
  }
}

export default Buscador
