import style from './Task.module.css';
import { Trash } from 'phosphor-react';

interface TaskProps {
  key: string;
  content: string;
}

export function Task({ content }: TaskProps) {
  return (
    <div className={style.task}>
      <div className={style.content}>
        <label>
          <input type="checkbox" />
          <span className={style["checkbox-text"]}>
            { content }
          </span>
        </label>
      </div>
      
      <Trash size={20} color="#808080" />
    </div>
  );
}
