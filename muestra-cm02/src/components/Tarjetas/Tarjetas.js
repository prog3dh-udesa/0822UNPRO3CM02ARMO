import React from 'react'
import Tarjeta from '../Tarjeta/Tarjeta'
function Tarjetas(props) {
  return (
    <>
        {
            props.info.map((elm, idx) => <Tarjeta key={idx + elm.id.toString()} info={elm} />)
        }
    </>
  )
}

export default Tarjetas
