import { MessageList } from './components/MessageList';
import { useState, useEffect, FC } from 'react';
import { Form } from './components/Form';
import { AUTHOR, Message, Messages } from './types';

export const App: FC = () => {
  const [messageList, setMessageList] = useState<Messages>([]);

  const addMessages = (newMessage: Message) => {
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        addMessages({
          author: AUTHOR.BOT,
          text: 'Im BOT',
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="App">
      <MessageList messageList={messageList} />
      <Form addMessages={addMessages} />
    </div>
  );
};
