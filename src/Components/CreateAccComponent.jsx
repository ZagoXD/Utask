import React, { useState } from 'react';
import './CreateAccComponent.css';
import "@fontsource/poppins";
import RedirecionarLogin from './RedirecionarLogin';
import {useNavigate} from 'react-router-dom';

const CreateAccComponent = () => {
  const [senha, setSenha] = useState('');
  const [senhaConfirmar, setSenhaConfirmar] = useState('');
  const [senhaValida, setSenhaValida] = useState(true);
  const [mostrarRedirecionamento, setMostrarRedirecionamento] = useState(false);
  const navigate = useNavigate();

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
    validarSenhas(event.target.value, senhaConfirmar);
  };

  const handleSenhaConfirmarChange = (event) => {
    setSenhaConfirmar(event.target.value);
    validarSenhas(senha, event.target.value);
  };

  const validarSenhas = (senha, senhaConfirmar) => {
    if (senha !== senhaConfirmar) {
      setSenhaValida(false);
    } else {
      setSenhaValida(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (senhaValida) {
      setMostrarRedirecionamento(true);
      setTimeout(() => {
        setMostrarRedirecionamento(false);
        navigate('/')
      }, 3000);
    }
  };

  return (
    <div className='createContainer'>
      <form className='create' onSubmit={handleSubmit}>
        {mostrarRedirecionamento && <RedirecionarLogin />}
        <h1>uTask 3.0</h1>
        <div className='sublinhado'><h2></h2></div>
        <p>Crie uma conta</p>
        <div>
          <label htmlFor="user">Nome de usuário</label>
          <input type="text" name='user' placeholder='Seu nome de usuario' required className='inputsCreate' />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" name='email' placeholder='Endereço de E-mail' required className='inputsCreate' />
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input type="password" name='senha' placeholder='Senha secreta' value={senha} onChange={handleSenhaChange} required className={senhaValida ? 'inputsCreate' : 'inputsCreateIncorretos'} />
        </div>
        <div>
          <label htmlFor="senhaConfirmar">Confirme Senha</label>
          <input type="password" name='senhaConfirmar' placeholder='Senha secreta' value={senhaConfirmar} onChange={handleSenhaConfirmarChange} required className={senhaValida ? 'inputsCreate' : 'inputsCreateIncorretos'} />
        </div>
        {!senhaValida && <p id="mensagemErroCreate">Senha não combinam, tente novamente.</p>}
        <input type="submit" value="Criar Cadastro" id='cadastrarBtn' />
      </form>
    </div>
  );
};

export default CreateAccComponent;