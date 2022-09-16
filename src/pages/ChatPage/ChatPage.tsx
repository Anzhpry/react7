import { useParams, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import style from './ChatPage.module.scss';
import { WithClasses } from '../../HOC/WithClasses';
import { useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);
  const messageList = useSelector(selectMessages);

  if (chatId && !messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList />
      <MessageListWithClass
        messageList={chatId ? messageList[chatId] : []}
        classes={style.border}
      />
      <Form />
    </>
  );
};
