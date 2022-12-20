import { render } from '@testing-library/react';
import LoginPage from './login';

const makeSut = () => render(<LoginPage />);

describe('LoginPage', () => {
  test('should render', () => {
    makeSut();
  });
});
