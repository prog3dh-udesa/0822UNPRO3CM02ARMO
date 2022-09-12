import React, { Component } from 'react'
import Character from '../../components/Character/Character'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrFavs:[]
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage !== null){
            let parsedStorage = JSON.parse(storage) //[1,2,3]

            Promise.all(
                parsedStorage.map(elm => {
                    return(
                        fetch(`https://rickandmortyapi.com/api/character/${elm}`)//1 //2 //3
                        .then(resp => resp.json())
                    )
                })
            )
            .then(data => this.setState({
                arrFavs:data
            }))
            .catch(err => console.log(err))
        }
    }

    render() {
        return (
        <div>
            {this.state.arrFavs.map((personaje, idx) => 
            <Character 
              key={`${Date.now()}-${idx}`}  
              info={personaje}
              //borrar={(name)=> this.borrar(name)}
              //favorito={(id)=> this.favorites(id)}
            />)}
        </div>
        )
    }
}

export default Favoritos