import React, { useState} from 'react';
import './IndividualTarefa.css';
import "@fontsource/poppins";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Excluir from './Excluir';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 


const IndividualTarefa = ({ index, title, description, deleteTask, moveToInProgress, moveToCompleted, moveToToDo, moveToToDo2, isDarkMode, isCompleted}) => {
    const [excluirVisivel, setExcluirVisivel] = useState(false);
    const [descricaoVisivel, setDescricaoVisivel] = useState(false);

    const toggleExcluirVisivel = () => {
        setExcluirVisivel(!excluirVisivel);
    };

    const toggleDescricaoVisivel = () => {
        setDescricaoVisivel(!descricaoVisivel);
    };

    const handleDeleteTask = () => {
        deleteTask(index);
        setExcluirVisivel(false);
    };

    const handleMoveToInProgress = () => {
        moveToInProgress(index);
    };

    const handleMoveToCompleted = () => {
        moveToCompleted(index);
    };

    const handleMoveToToDo = () => {
        moveToToDo(index);
    };

    const handleMoveToToDo2 = () => {
        moveToToDo2(index);
    };
  
    return (
        <div id='ContainerTask'>
            <div id='ContainerTitleTask'>
            <h1 className={isCompleted ? 'titleCompleted' : ''} id='TituloTask'>{title}</h1>
                <button onClick={toggleExcluirVisivel} id='moreveIcon'><MoreVertIcon/></button>
            </div>
            <div id='AparecerExcluir'>{excluirVisivel && <button onClick={handleDeleteTask}><Excluir /></button>}</div>
            <div id='ContainerDescricaoBotaoProximo' className="descricaoBotaoProximo">
                <div className='Descricao'>
                    <p>{descricaoVisivel ? 'Ocultar Descrição' : 'Ler Descrição'}</p>
                    <button onClick={toggleDescricaoVisivel}>
                        {descricaoVisivel ? <ExpandLessIcon className='expand'/> : <ExpandMoreIcon className='expand'/>}
                    </button>
                </div>
                <div id='ContainerBotaoProximo' className="botaoProximo">
                    {moveToInProgress && !moveToCompleted && (
                        <button onClick={handleMoveToInProgress}>
                            <img src={isDarkMode ? "/Proximo2.png" : "/Proximo.png"} alt="Proximo"/>
                        </button>
                    )}
                    {moveToCompleted && (
                        <div>
                            <button onClick={handleMoveToToDo}>
                            <img src={isDarkMode ? "/Voltar2.png" : "/Voltar.png"} alt="Proximo"/>
                            </button>    
                            <button onClick={handleMoveToCompleted}>
                            <img src={isDarkMode ? "/Proximo2.png" : "/Proximo.png"} alt="Proximo"/>
                            </button>
                        </div>
                    )}
                    {moveToToDo2 && (
                        <div>
                        <button onClick={handleMoveToToDo2}>
                        <img src={isDarkMode ? "/Redo2.png" : "/Redo.png"} alt="Proximo"/>
                        </button>
                        </div>
                    )}
                </div>
            </div>
            {descricaoVisivel && (
                <div id="DescricaoCompleta">
                    <p className='DescricaoCompleta'>{description}</p>
                </div>
            )}
        </div>
    );
};

export default IndividualTarefa;