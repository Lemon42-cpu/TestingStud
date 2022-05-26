import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Gistogram from './Gistogram'
import Test from './Test'
import DoughnutChart from './DoughnutChart'


export default function Header() {
  return (
    <>
    <header>
        <div>
            <span className='logo'>Тестирование студентов</span>
            <ul className='nav'>
                <li>
                  <Link to="/"  style={{ textDecoration: 'none' }}>Тесты</Link>
                  </li>
                <li>
                  <Link to="/profile" style={{ textDecoration: 'none' }}>Профиль</Link>
                  </li>

                <li>Выход</li>
            </ul>
        </div>
    </header>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/profile/doughnut" element={<DoughnutChart />}/>
        <Route path="/profile/gistogram" element={<Gistogram />}/>
      </Routes>
    </>
  )
}
