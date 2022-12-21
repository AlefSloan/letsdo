import style from './Task.module.css';
import { Trash } from 'phosphor-react';
import { MockUpInterface } from '../TaskContainer/TaskContainer';

interface TaskProps {
  id: string;
  content: string;
  status: boolean;
  hasChanged: (task: MockUpInterface) => void;
}

export function Task({ id, content, status, hasChanged }: TaskProps) {
  return (
    <div className={style.task}>
      <div className={style.content}>
        <label>
          <input type="checkbox" checked={status} onChange={() => hasChanged({id, content, status})}/>
          <span className={style["checkbox-text"]}>
            { content }
          </span>
        </label>
      </div>
      
      <Trash size={20} color="#808080" />
    </div>
  );
}
