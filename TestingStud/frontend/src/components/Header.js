import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Тестирование студентов</span>
            <ul className='nav'>
                <li>Профиль</li>
                <li>О приложении</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
