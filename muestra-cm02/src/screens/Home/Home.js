import React, { Component } from 'react'
// import Buscador from '../../components/Buscador/Buscador'
import Tarjetas from '../../components/Tarjetas/Tarjetas'
import BuscadorEspecial from '../../components/BuscadorEspecial/BuscadorEspecial'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            topList:{},
            albums:{},
            resultadosBusqueda:[],
            ready:false,
            readyResultados:false
        }
    }

    // buscadorInteligente(name, tipo){
    //     this.setState({
    //         busqueda:name,
    //         tipoDeBusqueda: tipo 
    //     }, ()=> {
    //         if(this.state.busqueda !== ''){
    //             fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/${this.state.tipoDeBusqueda}?q=${this.state.busqueda}`)
    //             .then(resp => resp.json())
    //             .then(data => this.setState({
    //                 resultadosDeBusqueda: data.data,
    //                 resultadosReady: true
    //             }))
    //             .catch(err => console.log(err))
    //         }
    //     })
    //     // fetch
    // }

    buscarData(valor){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=${valor}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
            resultadosBusqueda:data.data,
            readyResultados:true
        })
    })
        .catch(err => console.log(err))
    }

    componentDidMount(){
        fetch('https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10')
        .then(resp => resp.json())
        .then(data => this.setState({
            topList: data.data,
            ready:true
        }))
        .catch(err => console.log(err))
    }


  render() {
    return (
        <>
        <h1> Soy la Home</h1>
        <BuscadorEspecial metodoQueBusca ={(valor)=> this.buscarData(valor)} />
        {/* <Buscador funcionQueBusca={(nombre, tipo)=> this.buscadorInteligente(nombre, tipo)} /> */}

        {
            this.state.readyResultados
            ?
            <Tarjetas esBusqueda={true} info={this.state.resultadosBusqueda} />
            : ''
        }

        {/* {
            this.state.resultadosReady ?
            <Tarjetas info={this.state.resultadosDeBusqueda} />    
            :
                ''
        } */}
        {
            this.state.ready ?
                <>
                    <Tarjetas info={this.state.topList} />
                </> :
            'Cargando..'
        }
        </>
    )
  }
}

export default Home
