import React from 'react';
import "@fontsource/poppins";
import './ModalNewTask.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const ModalNewTask = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="janelaTask">
                <div className="headerTask">
                    <div id='teste1'><h1>Nova Task</h1></div>
                    <div id='teste2'><button className="btnfecharTask" onClick={closeModal}><HighlightOffIcon/></button></div>
                </div>
                <div className="tituloTask">
                    <h2>Título</h2>
                    <input id="idtitulo" type="text" />
                </div>

                <div className="descricaoTask">
                    <h2>Descrição</h2>
                    <textarea id="iddescricao" className="descricao"></textarea>
                </div>
                <button id="newTask">Criar task</button>
            </div>
        </div>
    );
}