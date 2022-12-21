import { Task } from '../Task/Task';
import style from './TaskContainer.module.css';

export function TaskContainer() {
  return (
    <div className={style['task-container']}>
      <div className={style.header}>
        <div>
          <span>Tarefas criadas</span>
          <span>5</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>2 de 5</span>
        </div>
      </div>
      <div className={style["task-content"]}>
        {[1, 2, 3, 4, 5].map(() => (
          <Task />
        ))}
      </div>
    </div>
  );
}
