import React from 'react'
import Table from '../components/Table'


var data = [
  {id: 1, name: 'РКСП', value: '2'},
  {id: 2, name: 'ООП', value: '5'},
  {id: 3, name: 'РПП', value: '4'}
];

const Profile = () => {
  return (
      <div>
        <div className='vertical-menu'>
                <li>
                  Таблица
                  </li>
                <li>
                  График
                  </li>
                <li>Граф</li>
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


