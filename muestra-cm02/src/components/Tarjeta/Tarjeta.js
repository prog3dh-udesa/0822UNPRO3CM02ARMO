import React, { Component } from 'react'

class Tarjeta extends Component {
    constructor(props){
        super(props)
    }
  render() {
    console.log(this.props)
    return (
      <div>{this.props.info.name}</div>
    )
  }
}

export default Tarjeta
