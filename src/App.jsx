import './App.css'
import FraseDia from './Components/FraseDia';
import Tarefas from './Components/Tarefas'
import "@fontsource/poppins";
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {


  return (
    <>
      <header>
        <div><img src="/Logobranca.png" alt="" /></div>
        <div><h1>uTask 3.0</h1></div>
        <div><img src="/Rectangle28.png" alt="" /></div>
      </header>
      <FraseDia/>
      <Tarefas/>
      <footer>
        <p>© Processo de Trainee <a href="https://unect.com.br/" target="_blank"> Unect Jr.</a></p>
        <p>Feito com<FavoriteIcon id="coracao"/>por Gustavo Zago </p>
      </footer>
    </>
  )
}

export default App
