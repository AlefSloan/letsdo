import style from './EmptyTask.module.css';
import { ClipboardText } from 'phosphor-react';

export function EmptyTask() {
  return (
    <div className={style['empty-task']}>
      <ClipboardText size={56} color="#808080"/>
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
