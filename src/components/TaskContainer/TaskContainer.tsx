import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskBar } from '../TaskBar/TaskBar';
import { Task } from '../Task/Task';
import { TaskMock } from '../../utils/Mocks/Mocks';

import style from './TaskContainer.module.css';

export interface MockUpInterface {
  id: string;
  content: string;
}

export function TaskContainer() { 
  const [tasksContainer, setTasksContainer] = useState(TaskMock);
  
  const handleCreateTask = (content: string): void => {
    const taskObj = {
      id: uuidv4(),
      content,
    };
    
    setTasksContainer([...tasksContainer, taskObj]);
  }

  return (
    <div className={style['task-container']}>
      <TaskBar handleCreate={handleCreateTask}/>
      
      <div className={style.header}>
        <div>
          <span>Tarefas criadas</span>
          <span>{tasksContainer.length}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>{`0 de ${tasksContainer.length}`}</span>
        </div>
      </div>
      
      <div className={style['task-content']}>
        
        {tasksContainer.map((task) => (
          <Task key={task.id} content={task.content} />
        ))}

      </div>
    </div>
  );
}
