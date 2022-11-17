import { render } from '@testing-library/react';
import ModalComponent from './modal';

const makeSut = () =>
  render(
    <ModalComponent isOpen={true} title='Modal Title'>
      <div />
    </ModalComponent>
  );

describe('ModalComponent', () => {
  test('should render', () => {
    makeSut();
    // const component = screen.getByRole('dialog', { name: 'Modal Title' });
    // expect(component).toBeInTheDocument();
  });
});
