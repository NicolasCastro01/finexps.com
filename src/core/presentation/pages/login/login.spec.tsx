import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import LoginPage from './login';

const makeSut = () => render(<LoginPage />);

describe('Login Page', () => {
  beforeEach(() => {
    makeSut();
  });

  describe('Render', () => {
    it('should render', () => {
      const component = screen.getByRole('presentation', {
        name: 'Página de login'
      });
      expect(component).toBeInTheDocument();
    });

    it('should render with button login', () => {
      const button = screen.getByRole('button', {
        name: 'Login'
      });
      expect(button).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should click in button login', async () => {
      const button = screen.getByRole('button', {
        name: 'Login'
      });
      fireEvent.click(button);
      waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
    });
  });
});
