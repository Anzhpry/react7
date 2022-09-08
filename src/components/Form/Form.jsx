import { useState } from 'react';
import { AUTHOR } from 'src/constants';

export const Form = ({ addMessages }) => {
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
      <input
        type="text"
        onChange={handleText}
        inputprops={{ 'data-testid': 'input' }}
      ></input>
      <button disabled={!text} onClick={handleMessages}>
        Отправить
      </button>
    </div>
  );
};
