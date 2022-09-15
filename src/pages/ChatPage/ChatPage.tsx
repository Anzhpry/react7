import { useParams, Navigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { AUTHOR } from 'src/types';
import style from './ChatPage.module.scss';
import { WithClasses } from '../../HOC/WithClasses';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from 'src/store/messages/selectors';
import { addMessage } from 'src/store/messages/actions';

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);
  const messageList = useSelector(selectMessages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      chatId &&
      messageList[chatId]?.length > 0 &&
      messageList[chatId][messageList[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            author: AUTHOR.BOT,
            text: 'Im BOT',
          })
        );
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [chatId, messageList, dispatch]);

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
