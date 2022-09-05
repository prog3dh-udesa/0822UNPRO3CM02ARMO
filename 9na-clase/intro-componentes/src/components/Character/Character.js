import React, {Component} from 'react'
import './styles.css'

class Character extends Component {
    constructor(props){
        super(props)
        this.state ={
            showMore:false,
            textoBoton:'Ver mas',
            favorito:false
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let parsedStorage = JSON.parse(storage) /*Array.includes()*/
        let isFavorite = parsedStorage.includes(this.props.info.id)
        if(isFavorite){
            this.setState({
                favorito: true
            })
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

    addFavorites(id){
        let storage = localStorage.getItem('favoritos')
        
        if(storage == null){
            let idsArr = [id]
            let idsArrToString = JSON.stringify(idsArr)
            localStorage.setItem('favoritos', idsArrToString)
        } else {
            let parsedStorage = JSON.parse(storage)
            parsedStorage.push(id)
            let storageToString = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', storageToString)
        }
        
        this.setState({
            favorito: true
        })
    }

    removeFavorites(id){
        /*Parametro recibido 95*/
        let storage = localStorage.getItem('favoritos')
        let storageParsed = JSON.parse(storage) /*[1, 2, 4, 95] */
        let filteredStorage = storageParsed.filter(elm => elm !== id)
        let storageToString = JSON.stringify(filteredStorage)
        localStorage.setItem('favoritos', storageToString)
        this.setState({
            favorito: false
        })
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
                    {
                        this.state.favorito ?
                        <button onClick={() => this.removeFavorites(this.props.info.id)}>Sacar favoritos</button>
                        :
                        <button onClick={() => this.addFavorites(this.props.info.id)}>Favoritos</button>
                    }
                    <button onClick={() => this.props.borrar(this.props.info.id)}>borrar</button>
                </div>
        
            )
    }
}

export default Character
