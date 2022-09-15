import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/messages/actions';
import { selectChats } from 'src/store/messages/selectors';


export const ChatList: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const chats = useSelector(selectChats, (prev, next) => prev.length === next.length);

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addChat(value));
      setValue('');
    }
  };

  return (
    <>
      <ul>
        {chats.map((chat) => (
          <ListItem key={chat.id}>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'black' : 'darkgrey',
              })}
              to={`/chats/${chat.name}`}
            >
              {chat.name}
            </NavLink>
            <button onClick={() => dispatch(deleteChat(chat.name))}>Удалить</button>
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
