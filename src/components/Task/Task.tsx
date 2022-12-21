import style from './Task.module.css';
import { Trash } from 'phosphor-react';

export function Task() {
  return (
    <div className={style.task}>
      <div className={style.content}>
        <label>
          <input type="checkbox" />
          <span className={style["checkbox-text"]}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quae
            ut commodi delectus.
          </span>
        </label>
      </div>
      <Trash size={20} color="#808080" />
    </div>
  );
}
