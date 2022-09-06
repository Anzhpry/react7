import { Form } from './Form';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Form', () => {
  it('render component', () => {
    const addMessages = jest.fn();
    render(<Form addMessages={addMessages} />);
  });
});
