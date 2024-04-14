import React, { useState } from 'react';
import './LoginComponente.css';
import "@fontsource/poppins";

const LoginComponent = () => {
  const [emailIncorreto, setEmailIncorreto] = useState(false);
  const [senhaIncorreta, setSenhaIncorreta] = useState(false);

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
      // Aqui você pode fazer algo como enviar os dados do formulário para autenticação
    }
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
        <input type="submit" value="Entrar" id='enviarBtn'/>
      </form>
    </div>
  )
}

export default LoginComponent;