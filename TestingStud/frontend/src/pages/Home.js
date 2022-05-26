import React, { Component } from 'react'
import Items from '../components/Items'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: [
            {
              id: 1,
              title: 'РКСП',
              category: 'IT' 
            },
            {
              id: 2,
              title: 'ООП',
              category: 'IT'
            },
            {
              id: 3,
              title: 'История России',
              category: 'История'
            }
          ]
        }
      }
      
  render() {
    return (
    <div>
      <div className='presentation'></div>
      <Items items={this.state.items} />
      </div>
    )
  }
}
