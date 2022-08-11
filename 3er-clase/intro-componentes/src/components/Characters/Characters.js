import React, {Component} from 'react'
import './styles.css'

function Characters(props) {
        return (
            <div className="character-card">
                <img 
                    src={`./img/characters/characters/${props.info}.jpg`}
                    alt={`Una imagen de ${props.name}`}
                />
                <h4>{props.info}</h4>
                <p>Character description:</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue augue tellus, non ultrices dui semper ut. Nunc lobortis dui id tortor pretium ultrices. Morbi vel lectus velit. Mauris mi tellus, ullamcorper at consectetur eget.</p>
                <a href="#">Ver más</a>
            </div>
    
        )
}

export default Characters
