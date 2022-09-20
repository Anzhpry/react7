import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Main } from 'src/pages/Main';
//import { Profile } from '../pages/Profile';
import { AboutWithConnect } from 'src/pages/About';
import { ChatList } from './ChatList';
import { ChatPage } from 'src/pages/ChatPage';
import React, { FC, lazy } from 'react';

const Profile = React.lazy(() =>
  Promise.all([
    import('../pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExport]) => moduleExport)
);

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="profile" element={<Profile />} />
      <Route path="about" element={<AboutWithConnect />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ChatPage />} />
      </Route>
    </Route>
    <Route path="*" element={<div> 404 page </div>} />
  </Routes>
);
