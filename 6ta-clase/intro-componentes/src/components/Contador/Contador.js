import React, {Component} from 'react'
import './styles.css'

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {
            valor: props.valorInicial,
            estaListo: false,
            isPremium: false,
        }
    }

    decrementar(){
        if(this.state.valor > 0){
            this.setState({
                valor: this.state.valor - this.props.valorRestar
            })
        }
    }

    incrementar(){
        if(this.state.valor < 10){
            this.setState({
                valor: this.state.valor + this.props.valorSumar
            })
        }
    }

    alistar(){
        this.setState({
            estaListo: true
        })
    }

    volverPremium(){
        this.setState({
            isPremium:true,
        })
    }

    render(){
        return(
            <div className={
                this.state.estaListo ?
                'ready'
                :
                'stopped'
            }>
                <h1>{this.state.valor}</h1>
                <div>
                    <button
                    onClick={()=> this.decrementar()}
                    >Decrementar</button>
                    <button
                    onClick={()=> this.incrementar()}
                    >
                        Incrementar
                    </button>
                    <button
                    onClick={()=> this.alistar()}
                    >
                        Alistar
                    </button>
                    <button
                    onClick={()=> this.volverPremium()}
                    >
                        volver premium
                    </button>
                </div>
                {
                    this.state.isPremium ?
                    <section>
                        <h1>Seccion secreta</h1>
                    </section>
                    :
                    <section>
                        <h1>Hazte premium para ver el contenido secreto</h1>
                    </section>
                }
            </div>
        )
    }
}

export default Contador