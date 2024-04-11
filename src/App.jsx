import './App.css'
import FraseDia from './Components/FraseDia';
import Tarefas from './Components/Tarefas'
import "@fontsource/poppins";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div id="app-container">
      <header>
        <div><img src="/Logobranca.png" alt="" /></div>
        <div><h1>uTask 3.0</h1></div>
        <div><img src="/Rectangle28.png" alt="" /></div>
      </header>
      <div id="content-container">
        <FraseDia/>
        <Tarefas openModal={openModal} />
      </div>
      {isModalOpen && <ModalNewTask closeModal={closeModal}/>}
      <footer>
        <p>© Processo de Trainee <a href="https://unect.com.br/" target="_blank" rel="noopener noreferrer"> Unect Jr.</a></p>
        <p>Feito com <FavoriteIcon id="coracao"/>por Gustavo Zago </p>
      </footer>
    </div>
  );
}

export default App;
