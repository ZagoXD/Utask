import React from 'react'
import CreateAccComponent from './Components/CreateAccComponent';
import './Registerscr.css'

const Registerscr = () => {
  return (
    <div id='registerscr'>
        <header id='headerTelaRegister'> </header>
        <div className='ContainerTelaRegister'>
          <CreateAccComponent/>
          <img src="Divisor.png" alt="" />
          <img src="IlustracaoRegister.png" alt="" />
        </div>
    </div>
  )
}

export default Registerscr