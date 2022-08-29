import React from 'react'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <>
            <h1>Home</h1>
            <Link to='/details/5'>Un enlace a una pantalla especifica</Link>
        </>
    )
}

export default Home