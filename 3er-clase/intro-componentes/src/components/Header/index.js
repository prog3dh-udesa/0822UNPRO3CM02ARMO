import React from 'react'
import './styles.css'

function Header(props){
    return(
        <nav>
        <ul className="main-nav">
            {props.menu.map((opcion) =><li>{opcion}</li>)}
        </ul>
        <ul className={`user ${props.clase}`}>
            <li>{props.nombre}
                <img src="./img/user.jpg" alt=""/>
                </li>
        </ul>
        </nav>
    )
}

export default Header