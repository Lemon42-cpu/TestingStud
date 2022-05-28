import React from 'react'
import Table from '../components/Table'
import {Link} from 'react-router-dom'

var data = [
  {id: 1, name: 'РКСП', category: 'ИТ', result: '6', result100: '75'},
  {id: 2, name: 'ООП', category:'ИТ', result: '5', result100: '50'},
  {id: 3, name: 'Информатика', category:'ИТ', result: '10', result100: '100'},
  {id: 4, name: 'История России', category:'История', result: '3', result100: '30'},
  {id: 5, name: 'Математический анализ', category:'Математика', result: '5', result100: '50'},
  {id: 6, name: 'Линейная алгебра', category:'Математика', result: '7', result100: '100'},
  {id: 7, name: 'ОФП', category:'Физкультура', result: '5', result100: '20'},
  {id: 8, name: 'Физика', category:'Физкика', result: '1', result100: '10'}
];

const Profile = () => {

  return (
      <div>
        <div className='vertical-menu'>
                <li>
                <Link to="/profile" style={{ textDecoration: 'none' }}>Таблица</Link>
                  </li>
                <li>
                 Прогресс
                  </li>
                <li><Link to="/profile/gistogram" style={{ textDecoration: 'none' }}>Гистрограмма</Link></li>
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


