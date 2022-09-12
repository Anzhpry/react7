import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';
//import { AUTHOR, Messages } from 'src/types';

describe('MessageList', () => {
  it('render component', () => {
    render(<MessageList messageList={[]} />);
  });

  it('messages list is empty', () => {
    render(<MessageList messageList={[]} />);
    expect(screen.queryAllByRole('li').length).toBe(0);
  });

  /* it('messages list length is 2', () => {
    const messageList: Messages = [
      {
        author: AUTHOR.USER,
        text: '1',
      },
      {
        author: AUTHOR.USER,
      },
    ];
    render(<MessageList messageList={messageList} />);
    expect(screen.getAllByTestId('li').length).toBe(2);
  }); */
});
