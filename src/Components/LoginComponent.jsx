import React, { useState } from 'react';
import './LoginComponente.css';
import "@fontsource/poppins";
import {useNavigate} from 'react-router-dom';

const LoginComponent = () => {
  const [emailIncorreto, setEmailIncorreto] = useState(false);
  const [senhaIncorreta, setSenhaIncorreta] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailDigitado = event.target.email.value;
    const senhaDigitada = event.target.senha.value;
    
    if (emailDigitado !== "teste@gmail.com") {
      setEmailIncorreto(true);
    } else {
      setEmailIncorreto(false);
    }

    if (senhaDigitada !== "teste123") {
      setSenhaIncorreta(true);
    } else {
      setSenhaIncorreta(false);
      navigate('/app');
    }
  };

  const handleRegistrarClick = () => {
    navigate('/register'); 
  };

  return (
    <div className='loginContainer alignVertical'>
      <form className='login' onSubmit={handleSubmit}>
        <h1>uTask 3.0</h1>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name='email' placeholder='Endereço de E-mail' required className={emailIncorreto ? 'inputsLoginIncorretos' : 'inputsLogin'}/>
          {emailIncorreto && <p className="mensagemErroLogin">E-mail incorreto. Por favor, tente novamente.</p>}
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" name='senha' placeholder='Senha secreta' required className={senhaIncorreta ? 'inputsLoginIncorretos' : 'inputsLogin'}/>
          {senhaIncorreta && <p className="mensagemErroLogin">Senha incorreta. Por favor, tente novamente.</p>}
          <button id='esqueciSenha'>Esqueci a senha?</button>
        </div>
        <input type="submit" value="Entrar" className='enviarBtn'/>
        <div id='imgForm'><img src="Divisor2.png" alt=""/></div>
      </form>
      <button className='registrarBtn' onClick={handleRegistrarClick}>Não tem cadastro ? Crie uma conta</button>
    </div>
  )
}

export default LoginComponent;