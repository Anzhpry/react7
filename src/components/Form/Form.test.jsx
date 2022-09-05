import { Form } from './Form';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
    it('render component', () => {
        render(<Form />);
    });

    it('button is disabled', () => {
        /*   const test = 'text'; */
        render(<Form disabled={false} />);

        expect(screen.getByText(test)).toBeDisabled();
    });
});
