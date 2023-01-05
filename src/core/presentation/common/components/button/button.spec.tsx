import { render, screen } from '@testing-library/react';
import ButtonComponent from './button';
import type { ButtonProps } from './interfaces';

const defaultProps = {
  backgroundTransparent: true,
  onClick: () => jest.fn(),
  variant: 'medium',
  label: 'Buscar',
  ariaLabel: 'Botão Buscar',
  loading: false
} as ButtonProps;

const makeSut = () => render(<ButtonComponent {...defaultProps} />);

describe('Button component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByRole('button', { name: 'Botão Buscar' });
      expect(component).toBeInTheDocument();
    });

    it('should render with label', () => {
      makeSut();
      const label = screen.getByText('Buscar');
      expect(label).toBeInTheDocument();
    });

    it('should render without background transparent', () => {
      defaultProps.backgroundTransparent = false;
      makeSut();
      const component = screen.getByRole('button', { name: 'Botão Buscar' });
      expect(component).toHaveClass('bg-greenDark');
    });

    it('should render with background transparent', () => {
      defaultProps.backgroundTransparent = true;
      makeSut();
      const component = screen.getByRole('button', { name: 'Botão Buscar' });
      expect(component).toHaveClass('bg-transparent');
    });

    it('should render without label', () => {
      defaultProps.label = '';
      makeSut();
      const component = screen.getByRole('button', { name: 'Botão Buscar' });
      expect(component).toHaveClass('bg-transparent');
    });

    it('should render with loading', () => {
      defaultProps.loading = true;
      makeSut();
      const component = screen.getByRole('button', { name: 'Botão Buscar' });
      expect(component).toHaveClass('bg-transparent');
    });
  });
});
