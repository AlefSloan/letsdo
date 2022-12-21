import { Header } from "./components/Header/Header";

import style from './App.module.css';
import { TaskContainer } from "./components/TaskContainer/TaskContainer";

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>  
        <TaskContainer />
      </div>
    </div>
  )
}
