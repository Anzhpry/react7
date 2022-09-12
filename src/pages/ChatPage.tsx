import { useParams, Navigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { ChatList } from 'src/components/ChatList';
import { Form } from 'src/components/Form';
import { MessageList } from 'src/components/MessageList';
import { AUTHOR, Chat, Message, Messages } from 'src/types';

interface ChatPageProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  messageList: Messages;
  onAddMessage: (chatId: string, msg: Message) => void;
  onDeleteChat: (chat: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({
  chats,
  onAddChat,
  onAddMessage,
  messageList,
  onDeleteChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messageList[chatId]?.length > 0 &&
      messageList[chatId][messageList[chatId].length - 1].author === AUTHOR.USER
    ) {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {
          author: AUTHOR.BOT,
          text: 'Im BOT',
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [chatId, messageList, onAddMessage]);

  if (chatId && !messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }

  return (
    <>
      <ChatList
        chats={chats}
        onAddChat={onAddChat}
        onDeleteChat={onDeleteChat}
      />
      <MessageList messageList={chatId ? messageList[chatId] : []} />
      <Form addMessages={onAddMessage} />
    </>
  );
};
