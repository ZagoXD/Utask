import React, { useState } from 'react';
import './Tarefas.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ModalNewTask } from './ModalNewTask';
import "@fontsource/poppins";

const Tarefas = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div id="meio-carrossel">
            <div id="tarefas">
                <div className="container">
                    <div id="headerFazer">
                        <p>A fazer</p>
                        <button id="addTask" onClick={openModal}>
                            <AddCircleOutlineIcon/>
                        </button>
                    </div>
                    <div className="tasks">
                        <div className="frame">
                            <ul className="listaTarefas">
                                {/* Conteúdo da lista de tarefas a fazer */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>Em andamento</p>
                    <div className="tasks">
                        <div className="frame">
                            <ul className="listaTarefas">
                                {/* Conteúdo da lista de tarefas em andamento */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>Feito</p>
                    <div className="tasks">
                        <div className="frame">
                            <ul className="listaTarefas">
                                {/* Conteúdo da lista de tarefas concluídas */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalNewTask closeModal={closeModal} />}
        </div>
    );
}

export default Tarefas;