import React from 'react'
import {Link} from 'react-router-dom'
import Prueba from '../../components/Header/Prueba/Prueba'
let objetoLiteral = {
    name: 'Pepe',
    id:1
}

function Home(props){

    return(
        <>
            <h1>Soy la Home</h1>
            <Link to={`/details/${objetoLiteral.id}`}>Un link a un contenido especifico</Link>
            <Prueba/>
        </>
    )
}

export default Home