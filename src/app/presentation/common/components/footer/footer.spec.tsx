import { render, screen } from '@testing-library/react';
import FooterComponent from './footer';

const makeSut = () => render(<FooterComponent />);

describe('Footer component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByRole('contentinfo', {
        name: 'Rodapé com informações sobre o Finexps'
      });
      expect(component).toBeInTheDocument();
    });
  });
});
