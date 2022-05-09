import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
          <h2>{this.props.item.title}</h2>
          <b>{this.props.item.category}</b>
          <div className='add-to-fav'>+</div>
      </div>
    )
  }
}

export default Item