import React from 'react'
import Category from '../Category/Category'

function Categories(props) {
  return (
    <>
        <h2>Categories in database</h2>
        <section className='general-data'>
        {props.info.map( (categoria, idx) => <Category key={`${Date.now()}-${idx}`} number={categoria} />)}
        </section>
    </>
  )
}

export default Categories
