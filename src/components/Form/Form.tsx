import { FC, useState, memo } from 'react';
import { Button } from './components/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from 'src/types';

interface FormProps {
  addMessages: (msg: Message) => void;
}

export const Form: FC<FormProps> = memo(({ addMessages }) => {
  const [text, setText] = useState();

  const handleText = (event: any) => {
    setText(event.target.value);
  };

  const handleMessages = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessages({
      author: AUTHOR.USER,
      text: text,
    });
  };

  return (
    <form onSubmit={handleMessages}>
      <TextField
        value={text || ''}
        onChange={handleText}
        inputProps={{ 'data-testid': 'input' }}
      />
      <Button label="Отправить" disabled={!text} />
    </form>
  );
});
