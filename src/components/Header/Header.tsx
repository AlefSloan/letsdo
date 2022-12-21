import style from './Header.module.css';
import { CheckSquareOffset } from 'phosphor-react'

export function Header() {
  return (
    <div className={style.header}>
      <CheckSquareOffset size={60} color="#4EA8DE" />
      <p>let's</p>
      <p>do</p>
    </div>
  );
}
