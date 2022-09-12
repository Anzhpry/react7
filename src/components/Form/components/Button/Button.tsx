import MUIButton from '@mui/material/Button';
import { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  click?: () => void;
  render?: (label: string) => JSX.Element;
}

export const Button: FC<ButtonProps> = ({
  render,
  disabled = false,
  click = () => null,
}) => (
  <MUIButton
    disabled={disabled}
    variant="contained"
    type="submit"
    onClick={click}
    data-testid="button"
  >
    {render && render('Отправить')}
  </MUIButton>
);
