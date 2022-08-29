import React from 'react'
import './styles.css'

function Category(props) {
  return (
    <article className='card'>
        <p>Category {props.number}</p>
    </article>
  )
}

export default Category