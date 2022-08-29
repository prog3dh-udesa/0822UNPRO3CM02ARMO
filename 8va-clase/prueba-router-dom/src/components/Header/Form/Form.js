import React, {Component} from 'react'

class Formulario extends Component{
    constructor(props){
        super(props)
        this.state={
            valor:''
        }

            
        }
    render(){
        return(
            <form>
                <input value={'hola'}/>
            </form>
        )
    }
        
}
export default Formulario