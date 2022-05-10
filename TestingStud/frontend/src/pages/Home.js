import React, { Component } from 'react'
import Items from '../components/Items'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
          items: [
            {
              id: 1,
              title: 'Разработка клиент-серверного приложения',
              category: 'IT' 
            },
            {
              id: 2,
              title: 'Объектно-ореинтированное программирование',
              category: 'IT'
            },
            {
              id: 3,
              title: 'Разработка программных продуктов и систем',
              category: 'IT'
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
