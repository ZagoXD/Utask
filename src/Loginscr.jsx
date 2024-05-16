import React from 'react'
import './Loginscr.css'
import LoginComponent from './Components/LoginComponent';

const Loginscr = () => {
  
  return (
    <div id='loginscrContainer'>
        <header id='headerTelaLogin'> </header>
        <div className='ContainerTelaLogin'>
          <img src="IlustracaoLogin.png" alt="" />
          <img src="Divisor.png" alt="" />
          <LoginComponent/>
        </div>
    </div>
  )
}

export default Loginscr