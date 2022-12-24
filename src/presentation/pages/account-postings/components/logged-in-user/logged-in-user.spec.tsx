import { render, screen } from '@testing-library/react';
import LoggedInUserComponent from './logged-in-user';

const makeSut = () => render(<LoggedInUserComponent />);

describe('LoggedInUserComponent', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByRole('presentation', {
      name: 'Usuário logado'
    });
    expect(component).toBeInTheDocument();
  });
});
