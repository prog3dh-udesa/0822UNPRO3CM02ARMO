import React, {Component} from 'react'
import Character from '../Character/Character'


class Characters extends Component {
  constructor(props){
    super(props)
    this.state={
      personajes: [],
      backup: [],
      prueba:'',
      pagina:0,
      favorito:[]
    }
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
    .then(data => this.setState({
      personajes: data.results,
      backup: data.results,
      pagina: this.state.pagina + 1
    }))
    .catch(err => console.log(err))
  }

  cargarMas(){
    fetch(`https://rickandmortyapi.com/api/character?page=${this.state.pagina + 1}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      personajes: this.state.personajes.concat(data.results),
      pagina: this.state.pagina + 1
    }))
    .catch(err => console.log(err))

  }

  favorites(id){
    let favoritoArr = this.state.personajes.filter(elm => elm.id === id)
    this.setState({
      favorito: this.state.favorito.concat(favoritoArr)
    })

    let arrayAGuardar = JSON.stringify(this.state.favorito)

    localStorage.setItem('favoritos', arrayAGuardar)

    let recuperarStorage = localStorage.getItem('favoritos')
    console.log(JSON.parse(recuperarStorage))
  }


  borrar(id){
    let arrayFiltrado = this.state.personajes.filter(personaje => personaje.id !== id)
    this.setState({
      personajes: arrayFiltrado
    })
  }

  backup(){
    this.setState({
      personajes: this.state.backup
    })
  }


  render(){
    return (
      <>
        <h2>Personajes de películas</h2>
        <section className="card-container">
          {this.state.personajes.map((personaje, idx) => 
            <Character 
              key={`${Date.now()}-${idx}`}  
              info={personaje}
              borrar={(name)=> this.borrar(name)}
              favorito={(id)=> this.favorites(id)}
            />)}

            <button onClick={()=> this.backup()}>Backup</button>
            <button onClick={()=> this.cargarMas()}>Cargar mas</button>
        </section>
      </>
    )
  }
}

export default  Characters