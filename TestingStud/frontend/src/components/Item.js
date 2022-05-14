import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export class Item extends Component {
  render() {
    
    return (
      <div className='item' >
        <Link to="/test" style={{ textDecoration: 'none' }}>
          <h2>{this.props.item.title}</h2>
          </Link>
          <b>{this.props.item.category}</b>
      </div>

    )
  }
}

export default Item