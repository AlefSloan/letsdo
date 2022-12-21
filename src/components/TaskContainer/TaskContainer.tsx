import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskBar } from '../TaskBar/TaskBar';
import { Task } from '../Task/Task';
import { TaskMock } from '../../utils/Mocks/Mocks';

import style from './TaskContainer.module.css';

export interface MockUpInterface {
  id: string;
  content: string;
  status: boolean;
}

const statusOrder = [true, false]

export function TaskContainer() { 
  const [tasksContainer, setTasksContainer] = useState(TaskMock);
  
  const handleCreateTask = (content: string): void => {
    const taskObj = {
      id: uuidv4(),
      content,
      status: false,
    };
    
    setTasksContainer([...tasksContainer, taskObj]);
  }

  const handleTaskStatusChange = ({id, content, status}: MockUpInterface) => {
    const filteredTask = tasksContainer.filter(task => !(task.id === id))

    const newStatusTask = {
      id,
      content,
      status: !status,
    }

    setTasksContainer([...filteredTask, newStatusTask]);
  }

  const completedTaskReducer = tasksContainer.filter((task) => task.status === true);

  return (
    <div className={style['task-container']}>
      <TaskBar handleCreate={handleCreateTask} />

      <div className={style.header}>
        <div>
          <span>Tarefas criadas</span>
          <span>{tasksContainer.length}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>{`${completedTaskReducer.length} de ${tasksContainer.length}`}</span>
        </div>
      </div>

      <div className={style['task-content']}>
        {tasksContainer
          .sort((a, b) => statusOrder.indexOf(b.status) - statusOrder.indexOf(a.status))
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              content={task.content}
              status={task.status}
              hasChanged={handleTaskStatusChange}
            />
          ))}
      </div>
    </div>
  );
}
