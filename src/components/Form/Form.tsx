import { FC, useState, memo } from 'react';
import Button from '@mui/material/Button';
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

  const handleMessages = () => {
    addMessages({
      author: AUTHOR.USER,
      text: text,
    });
  };

  return (
    <div>
      <TextField
        value={text || ""}
        onChange={handleText}
        inputProps={{ 'data-testid': 'input' }} />
      <Button
        type="submit"
        disabled={!text}
        onClick={handleMessages}
        variant="contained"
        data-testid='button'
      >
        Отправить
      </Button>
    </div >
  );
});
