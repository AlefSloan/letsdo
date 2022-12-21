import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

import style from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <SearchBar />
      </div>
    </div>
  )
}
