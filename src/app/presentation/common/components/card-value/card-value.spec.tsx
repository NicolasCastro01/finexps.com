import { render, screen } from '@testing-library/react';
import CardValueComponent from './card-value';
import type { CardValuesProps } from './interfaces';

const defaultProps = {
  title: 'Entradas',
  info: 'Últimas 24 horas',
  icon: <div />,
  iconColor: 'green',
  value: 1000.8,
  backgroundColor: 'gray'
} as CardValuesProps;

const makeSut = () => render(<CardValueComponent {...defaultProps} />);

describe('CardComponent', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByTestId('card-value');
    expect(component).toBeInTheDocument();
  });

  test('should render with background gray', () => {
    makeSut();
    const component = screen.getByTestId('card-value');
    expect(component).toHaveClass('bg-gray4');
  });

  test('should render with background green', () => {
    defaultProps.backgroundColor = 'green';
    makeSut();
    const component = screen.getByTestId('card-value');
    expect(component).toHaveClass('bg-greenDark');
  });
});
