import React, { useState } from 'react';
import './Tarefas.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ModalNewTask } from './ModalNewTask';
import IndividualTarefa from './IndividualTarefa';
import "@fontsource/poppins";

const Tarefas = ({ isDarkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [tasksInProgress, setTasksInProgress] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const addTask = (title, description) => {
        const newTask = { title, description };
        setTasks([...tasks, newTask]);
        closeModal(); // Fechar modal após adicionar a tarefa
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    };

    const moveTaskToInProgress = (index) => {
        const taskToMove = tasks[index];
        setTasksInProgress([...tasksInProgress, taskToMove]);
        deleteTask(index);
    };

    const moveTaskToCompleted = (index) => {
        const taskToMove = tasksInProgress[index];
        setTasksCompleted([...tasksCompleted, taskToMove]);
        deleteTaskInProgress(index);
    };

    const moveTaskToToDo = (index) => {
        const taskToMove = tasksInProgress[index];
        const updatedTasksInProgress = tasksInProgress.filter((task, i) => i !== index);
        setTasksInProgress(updatedTasksInProgress);
        setTasks([...tasks, taskToMove]);
    };

    const moveTaskToToDo2 = (index) => {
        const taskToMove = tasksCompleted[index];
        const updatedTasksCompleted = tasksCompleted.filter((task, i) => i !== index);
        setTasksCompleted(updatedTasksCompleted);
        setTasks([...tasks, taskToMove]);
    };

    const deleteTaskInProgress = (index) => {
        const updatedTasksInProgress = tasksInProgress.filter((task, i) => i !== index);
        setTasksInProgress(updatedTasksInProgress);
    };

    const deleteTaskCompleted = (index) => {
        const updatedTasksCompleted = tasksCompleted.filter((task, i) => i !== index);
        setTasksCompleted(updatedTasksCompleted);
    };

    return (
        <div>
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
                                {tasks.map((task, index) => (
                                    <IndividualTarefa 
                                        key={index} 
                                        index={index} 
                                        title={task.title} 
                                        description={task.description} 
                                        deleteTask={deleteTask} 
                                        moveToInProgress={moveTaskToInProgress}
                                        isDarkMode = {isDarkMode}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>Em andamento</p>
                    <div className="tasks">
                        <div className="frame">
                            <ul className="listaTarefas">
                                {tasksInProgress.map((task, index) => (
                                    <IndividualTarefa 
                                        key={index} 
                                        index={index} 
                                        title={task.title} 
                                        description={task.description} 
                                        deleteTask={deleteTaskInProgress} 
                                        moveToCompleted={moveTaskToCompleted}
                                        moveToToDo={moveTaskToToDo} // Adicionando a prop moveToToDo
                                        isDarkMode = {isDarkMode}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <p>Feito</p>
                    <div className="tasks">
                        <div className="frame">
                            <ul className="listaTarefas">
                                {tasksCompleted.map((task, index) => (
                                    <IndividualTarefa 
                                        key={index} 
                                        index={index} 
                                        title={task.title} 
                                        description={task.description}
                                        deleteTask={deleteTaskCompleted}
                                        moveToToDo2={moveTaskToToDo2} 
                                        isDarkMode = {isDarkMode}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalNewTask closeModal={closeModal} addTask={addTask} />}
        </div>
    );
}

export default Tarefas;