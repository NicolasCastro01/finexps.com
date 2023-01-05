import { render, screen } from '@testing-library/react';
import BoxComponent from './box';

const defaultProps = {
  children: <div>Test</div>,
  title: 'Test'
};

const makeSut = () => render(<BoxComponent {...defaultProps} />);

describe('BoxComponent', () => {
  describe('Render', () => {
    it('should render', () => {
      makeSut();
      const component = screen.getByRole('presentation', {
        name: 'Box Test'
      });
      expect(component).toBeInTheDocument();
    });
  });
});
