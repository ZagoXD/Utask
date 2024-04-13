import React, { useState } from 'react';
import "@fontsource/poppins";
import './ModalNewTask.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const ModalNewTask = ({ closeModal, addTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCreateTask = () => {
        if (title.trim() === "") {
            setError("Você deve inserir um título!");
            return;
        }

        addTask(title, description);
        setTitle("");
        setDescription("");
        setError("");
    };

    return (
        <div className="modal-overlay">
            <div className="janelaTask">
                <div className="headerTask">
                    <div id='teste1'><h1>Nova Task</h1></div>
                    <div id='teste2'><button className="btnfecharTask" onClick={closeModal}><HighlightOffIcon/></button></div>
                </div>
                <div className="tituloTask">
                    <h2 className='modalEscrito'>Título*</h2>
                    <input type="text" id="idtitulo" value={title} onChange={handleTitleChange} />
                </div>

                <div className="descricaoTask">
                    <h2 className='modalEscrito'>Descrição</h2>
                    <textarea id="iddescricao" className="descricao" value={description} onChange={handleDescriptionChange}></textarea>
                </div>
                {error && <p className="error-message">{error}</p>}
                <button id="newTask" onClick={handleCreateTask}>Criar task</button>
            </div>
        </div>
    );
}