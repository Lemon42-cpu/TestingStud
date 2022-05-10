import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Test from './Test'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <Link to="/test">
          <h2>{this.props.item.title}</h2>
          </Link>
          <b>{this.props.item.category}</b>
          <div className='add-to-fav'>+</div>
      </div>

    )
  }
}

export default Item