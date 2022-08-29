import React from 'react'

function Details(props) {
  return (
    <div>{
      props.match.params.id
      }</div>
  )
}

export default Details
