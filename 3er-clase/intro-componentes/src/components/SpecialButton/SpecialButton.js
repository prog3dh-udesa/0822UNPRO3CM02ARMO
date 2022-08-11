import React, { Component } from 'react'

class SpecialButton extends Component{
    
    metodoEspecial(){
        document.querySelector('body').style.backgroundColor = 'red';
        console.log('Hola desde el boton especial')
    }
    
    render(){
        return(
            <button onClick ={() => this.metodoEspecial()} >Soy el boton especial</button>
        )
    }
}

export default SpecialButton