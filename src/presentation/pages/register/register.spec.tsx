import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import RegisterComponent from './register';

const makeSut = () => render(<RegisterComponent />);

describe('RegisterComponent', () => {
  beforeEach(() => {
    makeSut();
  });

  describe('Render', () => {
    it('should render', () => {
      const component = screen.getByRole('presentation', {
        name: 'Página de cadastro'
      });
      expect(component).toBeInTheDocument();
    });

    it('should render with button register', () => {
      const button = screen.getByRole('button', {
        name: 'Cadastrar'
      });
      expect(button).toBeInTheDocument();
    });
  });
  describe('Interaction', () => {
    it('should click in button register', async () => {
      const button = screen.getByRole('button', {
        name: 'Cadastrar'
      });
      fireEvent.click(button);
      waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
    });
  });
});
