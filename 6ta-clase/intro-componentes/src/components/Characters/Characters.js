import React, {Component} from 'react'
import Character from '../Character/Character'
import Search from '../Search/Search';

const info = [
  {
      img: 'ahsoka.jpg',
      name: 'Ashoka',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'StarWars',
  }, 
  {
      img: 'anakin.jpg',
      name: 'Anakin',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'StarWars',
  },
  {
      img: 'batman.jpg',
      name: 'Batman',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'DC Comics',
  },
  {
      img: 'hulkSmall.jpg',
      name: 'Hulk',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'Marvel',
  },
  {
      img: 'kyloRen.jpg',
      name: 'Kylo Ren',
      description: 'Character description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis suscipit voluptatem corporis vitae, eius, alias, omnis exercitationem odit officia nemo molestiae.',
      extra: 'StarWars',
  },       
];


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

  filtrarPersonajes(nombre){
    let arrFiltrado = this.state.backup.filter(personaje => personaje.name.toLowerCase().includes(nombre.toLowerCase()))
    this.setState({
      personajes: arrFiltrado
    })
  }


  render(){
    return (
      <>
      <Search filtrar={(nombre)=> this.filtrarPersonajes(nombre)} />
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