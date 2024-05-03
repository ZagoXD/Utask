import React, { useState, useEffect } from 'react';
import './App.css';
import ChangeMode from './Components/ChangeMode';
import FraseDia from './Components/FraseDia';
import FraseDiaMobile from './Components/FraseDiaMobile'
import Tarefas from './Components/Tarefas';
import "@fontsource/poppins";
import FavoriteIcon from '@mui/icons-material/Favorite';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ModalMessage from './Components/ModalMessage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const changeModeHandler = (event) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', changeModeHandler);

    return () => {
      darkModeMediaQuery.removeEventListener('change', changeModeHandler);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bodyDark');
    } else {
      document.body.classList.remove('bodyDark');
    }
  }, [isDarkMode]);

  return (
    <div id="app-container" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <div><img src="/Logobranca.png" alt="" /></div>
        <div><h1>uTask 3.0</h1></div>
        <div><ChangeMode toggleMode={toggleMode} isDarkMode={isDarkMode} /></div>
      </header>
      <div id="containerContent">
        {isMobile ? (
          <div id="content-container-mobile">
            <div id="divFraseMobile">
              <FraseDiaMobile isDarkMode={isDarkMode} openModal={openModal} />
            </div>
            <Tarefas openModal={openModal} isDarkMode={isDarkMode} />
          </div>
        ) : (
          <div id="content-container">
            <FraseDia isDarkMode={isDarkMode} />
            <Tarefas openModal={openModal} isDarkMode={isDarkMode} />
          </div>
        )}
      </div>
      {isModalOpen && <ModalMessage isDarkMode={isDarkMode} closeModal={closeModal}/>}
      <footer>
        <p>© Processo de Trainee <a href="https://unect.com.br/" target="_blank" rel="noopener noreferrer"> Unect Jr.</a></p>
        <p>Feito com <FavoriteIcon id="coracao"/>por Gustavo Zago </p>
      </footer>
    </div>
  );
}

export default App;