import style from './TaskBar.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState } from 'react';

interface TaskBarProps {
  handleCreate: (taskText: string) => void;
}

export function TaskBar({ handleCreate }: TaskBarProps) {
  const [task, setTask] = useState('');
  const isDisabled = task.length <= 0 || task.length > 60 ? true : false;
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event?.target.value);
  }

  const handleSubmitTask = () =>{
    event?.preventDefault();
    handleCreate(task)
    setTask('');
  }

  return (
    <form onSubmit={handleSubmitTask} className={style['task-bar']}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={isDisabled} >
        Criar <PlusCircle size={20} color="#FFFFFF" />
      </button>
    </form>
  );
}
