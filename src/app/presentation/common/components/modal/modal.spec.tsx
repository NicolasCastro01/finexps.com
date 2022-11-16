import { render } from '@testing-library/react';
import ModalComponent from './modal';

const makeSut = () => render(<ModalComponent />);

describe('ModalComponent', () => {
  test('should render', () => {
    makeSut();
  });
});
