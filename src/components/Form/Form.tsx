import { FC, useState, memo, useContext } from 'react';
import { Button } from './components/Button';
import TextField from '@mui/material/TextField';
import { AUTHOR } from 'src/types';
import { useParams } from 'react-router-dom';
import { ThemeContext } from 'src/utils/ThemeContect';
import { useDispatch } from 'react-redux';
import { addMessage } from 'src/store/messages/actions';
import { Wrapper } from './styled';


export const Form: FC = memo(() => {
  const [text, setText] = useState();
  const { chatId } = useParams();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const handleText = (event: any) => {
    setText(event.target.value);
  };

  const handleMessages = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatId) {
      dispatch(
        addMessage(chatId, {
          author: AUTHOR.USER,
          text: text,
        })
      );
    }
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
});
