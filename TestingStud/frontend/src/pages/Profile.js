import React from 'react'
import Table from '../components/Table'
import {Link} from 'react-router-dom'

var data = [
  {id: 1, name: 'РКСП', category: 'ИТ', result: '6', result100: '75'},
  {id: 2, name: 'ООП', category:'ИТ', result: '5', result100: '50'},
  {id: 3, name: 'История России', category:'История', result: '3', result100: '30'}
];

const Profile = () => {

  return (
      <div>
        <div className='vertical-menu'>
                <li>
                <Link to="/profile" style={{ textDecoration: 'none' }}>Таблица</Link>
                  </li>
                <li>
                  График
                  </li>
                <li><Link to="/profile/gistogramm" style={{ textDecoration: 'none' }}>Гистрограмма</Link></li>
        </div>        
        <div className='table'>
        <div className="user">
        Пользователь: admin
        </div>
        <Table data={data}/>
        </div>
        
      </div>
    )
}

export default Profile;


