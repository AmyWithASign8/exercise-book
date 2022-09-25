import React from 'react'
import logo from '../../assets/img/reactmini.webp'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} width="400px"/>
        </div>
        <div className='headerWords'>
            <p>Сборник упражнений на React</p>
        </div>
    </div>
  )
}

export default Header