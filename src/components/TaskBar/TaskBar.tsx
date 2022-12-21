import style from './TaskBar.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

interface TaskBarProps {
  handleCreate: (taskText: string) => void;
}

export function TaskBar({ handleCreate }: TaskBarProps) {
  const [task, setTask] = useState('');
  const isDisabled = task.length <= 0 ? true : false;
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event?.target.value);
  }

  const handleButtonClick = () =>{
    handleCreate(task)
    setTask('');
  }

  return (
    <div className={style['task-bar']}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleInputChange}
      />
      <button disabled={isDisabled} onClick={handleButtonClick}>
        Criar <PlusCircle size={20} color="#FFFFFF" />
      </button>
    </div>
  );
}
