import { Form } from './Form';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('render component', () => {
    render(<Form />);
  });

  /* it('input change with fireevent', () => {
    const addMessage = jest.fn();
    render(<Form addMessages={addMessage} />);
    const input = screen.getByTestId<HTMLInputElement>('input');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');
  });

  it('button click with fireEvent', () => {
    const addMessage = jest.fn();
    render(<Form addMessages={addMessage} />);
    const input = screen.getByTestId<HTMLInputElement>('input');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input.value).toBe('new value');

    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(addMessage).toHaveBeenCalledTimes(1);
  }); */
});
