import { Message } from './components/Message';
import { useState } from "react";
import style from './App.module.scss'


export const App = () => {
  const [messageText, setMessage] = useState("Hello")
  const handleClick = (ev) => {
    setMessage(ev.target.value)
  }

  return (
    <div className="App">
      <input className={style.input} onChange={handleClick} />
      <Message messageText={messageText} />
    </div>

  );
}
