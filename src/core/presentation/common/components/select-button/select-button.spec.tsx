import { render, screen } from '@testing-library/react';
import type { SelectButtonProps } from './interfaces';
import SelectButtonComponent from './select-button';

const defaultProps = {
  icon: <svg />,
  label: 'Entrada',
  onClick: jest.fn(),
  selected: true,
  variant: 'success',
  value: 'entrada'
} as SelectButtonProps;

const makeSut = () => render(<SelectButtonComponent {...defaultProps} />);

describe('Select button component', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toBeInTheDocument();
    });

    it('should render with icon', () => {
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toContainHTML('<svg />');
    });

    it('should render with label', () => {
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toHaveTextContent('Entrada');
    });

    it('should render with selected and variant success', () => {
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toHaveClass('bg-greenDark text-white');
    });

    it('should render with selected and variant error', () => {
      defaultProps.variant = 'error';
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toHaveClass('bg-redDark text-white');
    });

    it('should render with not selected and variant success', () => {
      defaultProps.selected = false;
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toHaveClass('bg-gray3 text-gray6');
    });

    it('should render with not selected and variant error', () => {
      defaultProps.variant = 'error';
      makeSut();
      const component = screen.getByRole('button', { name: /Botão Entrada/i });
      expect(component).toHaveClass('bg-gray3 text-gray6');
    });
  });
});
