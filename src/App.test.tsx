import { render, screen, waitFor } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  /*   it('render component', () => {
      render(<App />);
    }); */

  it('wrong url', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-url']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404 page')).toBeInTheDocument();
  });
  /* it('send user message', async () => {
    render(<App />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, world!');

    const button = screen.getByTestId('button');
    await userEvent.click(button);

    expect(screen.getAllByTestId('li').length).toBe(1);
  });
  it('bot answer', async () => {
    render(<App />);

    const input = screen.getByTestId<HTMLInputElement>('input');
    await userEvent.type(input, 'Hello, world!');

    const button = screen.getByTestId('button');
    await userEvent.click(button);

    await waitFor(
      () => expect(screen.getByText(/Im BOT/)).toBeInTheDocument(),
      {
        timeout: 1600,
      }
    );
  }); */
});
