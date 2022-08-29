import React, {Component} from 'react'
import './styles.css'

class Character extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas'
        }
    }

    changeShowMore(){
        if(this.state.showMore){
            this.setState({
                showMore: false,
                textoBoton: 'Ver más'
            })
        } else {
            this.setState({
                showMore: true,
                textoBoton: 'Ver menos'
            })
        }
    }

    render(){
        return (
                <div className="character-card">
                    <img 
                        src={this.props.info.image}
                        alt={`Una imagen de ${this.props.info.name}`}
                    />
                    <h4>{this.props.info.name}</h4>
                    <p>Character description:</p>
                    <p>{this.props.info.status}</p>
                    <p>{this.props.info.species}</p>
                    {
                    this.state.showMore ?
                        <p>{this.props.info.extra}</p>
                    : 
                    ''
                    }
                    <a onClick={
                        ()=> this.changeShowMore()
                    }>{this.state.textoBoton}</a>
                    <button onClick={()=> this.props.favorito(this.props.info.id)}>Favoritos</button>
                    <button onClick={() => this.props.borrar(this.props.info.id)}>borrar</button>
                </div>
        
            )
    }
}

export default Character
