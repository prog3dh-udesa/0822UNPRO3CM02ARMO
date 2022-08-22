import React, {Component} from 'react'
import Character from '../Character/Character'

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
      personajes: info,
      backup: info,
      prueba:''
    }
    console.log('Soy el constructor')
  }

  componentDidMount(){
    fetch('https://rickandmortyapi.com/api/character')
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }


  borrar(name){
    let arrayFiltrado = this.state.personajes.filter(personaje => personaje.name !== name)
    this.setState({
      personajes: arrayFiltrado
    })
  }

  backup(){
    this.setState({
      personajes: this.state.backup
    })
  }

  componentDidUpdate(){
    console.log('Soy el update')
    //ESTO LO VAMOS A EVITAR A TODA COSTA
    // this.setState({
    //   prueba:'prueba'
    // })
    //ESTO LO VAMOS A EVITAR A TODA COSTA

  }

  componentWillUnmount(){
    console.log('Soy el Unmount')
  }


  render(){
    console.log('Soy el render')
    return (
      <>
        <h2>Personajes de películas</h2>
        <section className="card-container">
          {this.state.personajes.map((personaje, idx) => 
            <Character 
              key={`${Date.now()}-${idx}`}  
              info={personaje}
              borrar={(name)=> this.borrar(name)}
            />)}

            <button onClick={()=> this.backup()}>Backup</button>
        </section>
      </>
    )
  }
}

export default  Characters