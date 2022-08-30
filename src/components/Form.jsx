import { useState } from 'react';
import { AUTHOR } from 'src/constants';

export const Form = ({ setMessageList, addMessages }) => {
  const [text, setText] = useState();

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleMessages = () => {
    addMessages({
      author: AUTHOR.user,
      text: text,
    });
  };

  return (
    <div>
      <textarea type="text" onChange={handleText}></textarea>
      <button disabled={!text} onClick={handleMessages}>Отправить</button>
    </div>
  );
};
