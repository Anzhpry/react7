import { useState, useEffect } from 'react';

export const Form = ({ messageList, setMessageList }) => {
  const [robotText, setRobotText] = useState();
  const [text, setText] = useState();
  const author = 'Name';

  useEffect(() => {
    if (messageList.length !== 0) {
      setTimeout(() => {
        setRobotText(`${author}, отправлено`);
        setTimeout(() => {
          setRobotText();
        }, 1500);
      }, 1000);
    }
  }, [messageList]);
  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleMessages = () => {
    const message = {
      author: author,
      text: text,
    };
    messageList.push(message);
    setMessageList([...messageList]);
  };

  return (
    <>
      <ul>
        {messageList.map((item, idx) => (
          <li key={idx}>
            {item.author} : {item.text}
          </li>
        ))}
      </ul>
      <div>
        <textarea type="text" onBlur={handleText}></textarea>
        <button onClick={handleMessages}>Отправить</button>
        <p>{robotText}</p>
      </div>
    </>
  );
};
