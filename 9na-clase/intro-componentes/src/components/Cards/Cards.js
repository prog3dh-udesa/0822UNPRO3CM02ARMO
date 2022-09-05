import React, { Component } from 'react'
import Card from '../Card/Card'

class Cards extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <>
        <h1>My app in React</h1>
        <section className="top-data">
            {this.props.info.map((tarjeta, idx) => <Card key={`${Date.now()}-${idx}`} info={tarjeta}/>)}
        </section>
      </>
    )
  }
}

export default Cards
