import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Messages } from 'src/types';

interface MassageProps {
  messageList: Messages;
}

export const MessageList: FC<MassageProps> = ({ messageList }) => {
  return (
    <List>
      {messageList.map((item, idx) => (
        <ListItem key={idx}>
          {item.author} : {item.text}
        </ListItem>
      ))}
    </List>
  );
};
