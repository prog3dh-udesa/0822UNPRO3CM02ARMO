import React, { Component } from 'react'

class BuscadorEspecial extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }
    otroMetodo(){
      console.log('otro metodo')
    }
    prevenirRefresh(event){
        event.preventDefault()
    }

    controlarCambiosDelInput(event){
        this.setState({
          valorInput: event.target.value
        }, ()=> this.props.metodoQueBusca(this.state.valorInput))
    }


  render() {
    return (
      <form onSubmit={(event)=> this.prevenirRefresh(event)}>
        <input onChange={(event)=> this.controlarCambiosDelInput(event)} value={this.state.valorInput}/>
      </form>
    )
  }
}

export default  BuscadorEspecial
