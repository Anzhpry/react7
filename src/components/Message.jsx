import { useState } from 'react';

export const Message = () => {
  const [messageText, setMessage] = useState('Hello');
  const handleClick = (ev) => {
    setMessage(ev.target.value);
  };

  return (
    <>
      <input onChange={handleClick} />
      <p>{messageText}</p>
    </>
  );
};
