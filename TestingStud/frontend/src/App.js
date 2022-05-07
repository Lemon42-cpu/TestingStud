import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Items from './components/Items'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Разработка клиент-серверного приложения',
          img: 'item1.jpg',
          // desc:
          category: 'IT' 
        },
        {
          id: 2,
          title: 'Объектно-ореинтированное программирование',
          img: 'item2.jpg',
          category: 'IT'
        },
        {
          id: 3,
          title: 'Разработка программных продуктов и систем',
          img: 'item3.jpg',
          category: 'IT'
        }
      ]
    }
  }
render(){
  return (
    <div className='wrapper'>
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
  );
}
}

export default App;
