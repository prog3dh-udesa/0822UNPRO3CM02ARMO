import React, {Component} from 'react'
import './styles.css'

class Card extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <article className="data-detail">
          <div className="card-content">
              <h4>{this.props.info.title}</h4>
              <p>{this.props.info.price}</p>
          </div>
          <i className={`fas fa-${this.props.info.icon} fa-2x text-gray-300`}></i>
      </article>
    )
  }
}

export default Card