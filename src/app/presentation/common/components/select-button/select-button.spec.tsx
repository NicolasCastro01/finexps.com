import { render, screen } from '@testing-library/react';
import type { SelectButtonProps } from './interfaces';
import SelectButtonComponent from './select-button';

const defaultProps = {
  icon: <svg />,
  label: 'Entrada',
  onClick: jest.fn(),
  selected: true,
  variant: 'success'
} as SelectButtonProps;

const makeSut = () => render(<SelectButtonComponent {...defaultProps} />);

describe('SelectButtonComponent', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toBeInTheDocument();
  });

  test('should render with icon', () => {
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toContainHTML('<svg />');
  });

  test('should render with label', () => {
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toHaveTextContent('Entrada');
  });

  test('should render with selected and variant success', () => {
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toHaveClass('bg-greenDark text-white');
  });

  test('should render with selected and variant error', () => {
    defaultProps.variant = 'error';
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toHaveClass('bg-redDark text-white');
  });

  test('should render with not selected and variant success', () => {
    defaultProps.selected = false;
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toHaveClass('bg-gray3 text-gray6');
  });

  test('should render with not selected and variant error', () => {
    defaultProps.variant = 'error';
    makeSut();
    const component = screen.getByRole('button', { name: /Botão Entrada/i });
    expect(component).toHaveClass('bg-gray3 text-gray6');
  });
});
