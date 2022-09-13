import { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';
import { ChatList } from './components/ChatList';
import { AUTHOR, Chat, Message, Messages } from './types';
import { ChatPage } from './pages/ChatPage';
import { Header } from './components/Header';

const defaultChats: Chat[] = [
  {
    id: '1',
    name: 'FIRST',
  },
  {
    id: '2',
    name: 'SECOND',
  },
];

const defaultMessages: Messages = {
  '1': [{ author: AUTHOR.USER, text: 'hello' }],
  '2': [{ author: AUTHOR.BOT, text: 'hello, im bot' }],
};

export const App: FC = () => {
  const [chats, setChats] = useState<Chat[]>(defaultChats);
  const [messageList, setMessageList] = useState<Messages>(defaultMessages);



  const onAddChat = (newChat: Chat) => {
    setChats([...chats, newChat]);
    setMessageList({
      ...messageList,
      [newChat.id]: [],
    });
  };

  const onDeleteChat = (chatId: string) => {
    setChats(chats.filter(chat => chat.id !== chatId));
  };

  const onAddMessage = (chatId: string, newMessage: Message) => {
    setMessageList({
      ...messageList,
      [chatId]: [...messageList[chatId], newMessage],
    });
  };
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Main />} />
        <Route path="profile" element={<Profile />} />
        <Route path="chats">
          <Route
            index
            element={
              <ChatList
                chats={chats}
                onAddChat={onAddChat}
                onDeleteChat={onDeleteChat}
              />
            }
          />
          <Route
            path=":chatId"
            element={
              <ChatPage
                chats={chats}
                onAddChat={onAddChat}
                messageList={messageList}
                onAddMessage={onAddMessage}
                onDeleteChat={onDeleteChat}
              />
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<div>404 page</div>} />
    </Routes>
  );
};
