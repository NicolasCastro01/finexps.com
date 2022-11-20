import { render } from '@testing-library/react';
import CardComponent from './card-value';

const makeSut = () => render(<CardComponent />);

describe('CardComponent', () => {
  test('should render', () => {
    makeSut();
  });
});
