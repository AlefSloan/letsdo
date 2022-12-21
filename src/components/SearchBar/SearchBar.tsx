import style from './SearchBar.module.css';
import { PlusCircle } from 'phosphor-react';

export function SearchBar() {
  return (
    <div className={style["search-bar"]}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>Criar <PlusCircle size={20} color="#FFFFFF" /></button>
    </div>
  )
}
