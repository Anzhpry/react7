import { Message } from './components/Message';
import { useState } from 'react';
import { Form } from './components/Form';

export const App = () => {
  const [messageList, setMessageList] = useState([]);

  return (
    <div className="App">
      <h3>Lesson-1</h3>
      <Message />
      <hr />
      <h3>Lesson-2</h3>
      <Form messageList={messageList} setMessageList={setMessageList} />
    </div>
  );
};
