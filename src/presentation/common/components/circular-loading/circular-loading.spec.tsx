import { render, screen } from '@testing-library/react';
import CircularLoadingComponent from './circular-loading';

const makeSut = () => render(<CircularLoadingComponent />);

describe('CircularLoadingComponent', () => {
  test('should render', () => {
    makeSut();
    const component = screen.getByRole('progressbar', {
      name: 'Loading em forma de círculo'
    });
    expect(component).toBeInTheDocument();
  });
});
