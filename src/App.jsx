import { Message } from './components/Message'
import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { AUTHOR } from 'src/constants';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  const addMessages = (newMessage) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage])
  };

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === AUTHOR.user) {
      const timeout = setTimeout(() => {
        addMessages({
          author: AUTHOR.bot,
          text: 'Im BOT',
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="App">
      <Message messageList={messageList} />
      <Form addMessages={addMessages} />
    </div>
  );
};
