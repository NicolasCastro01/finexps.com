import { fireEvent, render, screen } from '@testing-library/react';
import ModalComponent from './modal';

const defaultProps = {
  isOpen: true,
  title: 'Modal Title',
  onClose: jest.fn()
};

const makeSut = () =>
  render(
    <ModalComponent {...defaultProps}>
      <div />
    </ModalComponent>
  );

describe('Modal component', () => {
  describe('Render', () => {
    it('should render modal with isOpen true', () => {
      makeSut();
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });

    it('should render modal with isOpen false', () => {
      defaultProps.isOpen = false;
      makeSut();
      const modal = screen.queryByTestId('modal');
      expect(modal).not.toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    beforeEach(() => {
      defaultProps.isOpen = true;
    });

    it('should render button close modal', () => {
      makeSut();
      const button = screen.getByRole('button', { name: 'Fechar modal' });
      expect(button).toBeInTheDocument();
    });

    it('should call handleClose', () => {
      makeSut();
      const button = screen.getByRole('button', { name: 'Fechar modal' });
      fireEvent.click(button);
    });

    it;
  });
});
