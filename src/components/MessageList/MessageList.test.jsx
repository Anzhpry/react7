import { Message } from './MessageList';
import { render } from '@testing-library/react';

describe('Message', () => {
  it('render component', () => {
    render(<Message messageList={[]} />);
  });
});
