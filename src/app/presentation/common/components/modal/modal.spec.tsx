import { fireEvent, render, screen } from '@testing-library/react';
import ModalComponent from './modal';

const defaultProps = {
  isOpen: true,
  title: 'Modal Title'
};

const makeSut = () =>
  render(
    <ModalComponent {...defaultProps}>
      <div />
    </ModalComponent>
  );

describe('ModalComponent', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByTestId('modal');
    expect(component).toBeInTheDocument();
  });

  test('should render button close modal', () => {
    makeSut();
    const button = screen.getByRole('button', { name: 'Fechar modal' });
    expect(button).toBeInTheDocument();
  });

  test('should call handleClose', () => {
    makeSut();
    const button = screen.getByRole('button', { name: 'Fechar modal' });
    fireEvent.click(button);
  });
});
