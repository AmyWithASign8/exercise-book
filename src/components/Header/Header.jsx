import React from 'react'
import logo from '../../assets/img/reactmini.webp'
import './Header.scss'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div className='logo'>
          <Link to="/">
            <img src={logo} width="400px"/>
          </Link>
        </div>
        <div className='headerWords'>
            <p>Сборник упражнений на React</p>
        </div>
    </div>
  )
}

export default Header