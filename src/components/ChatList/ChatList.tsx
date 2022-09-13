import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useState } from 'react';
import { Chat } from 'src/types';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890abcdef', 10);

interface ChatListProps {
  chats: Chat[];
  onAddChat: (chat: Chat) => void;
  onDeleteChat: (chatId: string) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chats,
  onAddChat,
  onDeleteChat,
}) => {
  const [value, setValue] = useState('');
  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      });
      setValue('');
    }
  };

  return (
    <>
      <ul >
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'black' : 'darkgrey',
              })}
              to={`/chats/${chat.id}`}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => onDeleteChat(chat.id)}>Удалить</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handelSubmit}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button>Create</button>
      </form>
    </>
  );
};
