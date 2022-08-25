import React from 'react'
import {Link} from 'react-router-dom'

let objetoLiteral = {
    name: 'Pepe',
    id:1
}

function Home(){

    return(
        <>
            <h1>Soy la Home</h1>
            <Link to={`/details/${objetoLiteral.id}`}>Un link a un contenido especifico</Link>
        </>
    )
}

export default Home