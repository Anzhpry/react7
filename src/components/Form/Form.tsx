import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from 'src/types';

interface FormProps {
  addMessages: (msg: Message) => void;
}

export const Form: FC<FormProps> = ({ addMessages }) => {
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
      <TextField type="text" onChange={handleText} />
      <Button
        type="submit"
        disabled={!text}
        onClick={handleMessages}
        variant="contained"
      >
        Отправить
      </Button>
    </div>
  );
};
