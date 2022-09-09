import { List, ListItem } from '@mui/material';
import { FC } from 'react';
import { Message } from 'src/types';

interface MassageProps {
  messageList: Message[];
}

export const MessageList: FC<MassageProps> = ({ messageList }) => {
  return (
    <List>
      {messageList.map((item, idx) => (
        <ListItem key={idx} data-testid="li">
          {item.author} : {item.text}
        </ListItem>
      ))}
    </List>
  );
};
