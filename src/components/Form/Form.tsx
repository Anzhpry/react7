import { FC, useState, memo, useContext } from 'react';
import { Button } from './components/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR, Message } from 'src/types';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'src/utils/ThemeContect';

interface FormProps {
  addMessages: (chatId: string, msg: Message) => void;
}

export const Form: FC<FormProps> = memo(({ addMessages }) => {
  const [text, setText] = useState();
  const { chatId } = useParams();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleText = (event: any) => {
    setText(event.target.value);
  };

  const handleMessages = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatId) {
      addMessages(chatId, {
        author: AUTHOR.USER,
        text: text,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleMessages}>
        <TextField
          value={text || ''}
          onChange={handleText}
          inputProps={{ 'data-testid': 'input' }}
        />
        <Button disabled={!text} render={(label: string) => <div>{label}</div>}>
          Отправить
        </Button>
      </form>
      <p>Theme: {theme === 'light' ? '🌞' : '🌙'}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </>
  );
});
