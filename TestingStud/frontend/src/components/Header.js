import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Test from './Test'


export default function Header() {
  return (
    <>
    <header>
        <div>
            <span className='logo'>Тестирование студентов</span>
            <ul className='nav'>
                <li>
                  <Link to="/" >Тесты</Link>
                  </li>
                <li>
                  <Link to="/profile">Профиль</Link>
                  </li>

                <li>Выход</li>
            </ul>
        </div>
    </header>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/test" element={<Test />}/>
      </Routes>
    </>
  )
}
