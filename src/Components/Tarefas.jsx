import React from 'react';
import './Tarefas.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "@fontsource/poppins";


const Tarefas = () => {
    return (
        <div className="meio-carrossel">
            <div className="tarefas">
                <div className="container">
                    <div className="headerFazer">
                        <p>A fazer</p>
                        <button id="addTask">
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
        </div>
    );
}

export default Tarefas;