import React from 'react'
import './RedirecionarLogin.css'
import "@fontsource/poppins";

const RedirecionarLogin = () => {
  return (
    <div className='ModalRedirecionarOverlay'>
        <div className='containerModalRedirecionar'>
            <div>
                <div id='titleRedirect'>
                    <img src="/verified.png" alt="" />
                    <p>Conta criada com sucesso</p>
                </div>
                <div>
                    <p id='textRedirect'>Um instante, iremos te redirecionar ao login !</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RedirecionarLogin