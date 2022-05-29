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
              category: 'ИТ' 
            },
            {
              id: 2,
              title: 'ООП',
              category: 'ИТ'
            },
            {
              id: 3,
              title: 'Информатика',
              category: 'ИТ'
            },
            {
              id: 4,
              title: 'История России',
              category: 'История'
            },
            {
              id: 5,
              title: 'Математический анализ',
              category: 'Математика'
            },
            {
              id: 6,
              title: 'Линейная алгебра',
              category: 'Математика'
            },
            {
              id: 7,
              title: 'ОФП',
              category: 'Физкультура'
            },
            {
              id: 8,
              title: 'Физика',
              category: 'Физика'
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
