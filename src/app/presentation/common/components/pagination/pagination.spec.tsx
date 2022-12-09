import { fireEvent, render, screen } from '@testing-library/react';
import PaginationComponent from './pagination';

const defaultProps = {
	totalPages: 10
};

const makeSut = () => render(<PaginationComponent {...defaultProps} />);

describe('PaginationComponent', () => {
	it('should render', () => {
		makeSut();
		const component = screen.getByTestId('pagination');
		expect(component).toBeInTheDocument();
	});

	describe('Interaction', () => {
		it('should call handleNext when click on arrow right', () => {
			makeSut();
			const buttonArrowRight = screen.getByRole('button', {
				name: 'Próxima página'
			});
			fireEvent.click(buttonArrowRight);
			const buttonCurrentPage = screen.getByRole('button', {
				name: 'Página atual'
			});
			expect(buttonCurrentPage).toHaveTextContent('2');
		});

		it('should call handlePrevious when click on arrow left', () => {
			makeSut();
			const buttonArrowRight = screen.getByRole('button', {
				name: 'Próxima página'
			});
			fireEvent.click(buttonArrowRight);
			const buttonArrowLeft = screen.getByRole('button', {
				name: 'Página anterior'
			});
			fireEvent.click(buttonArrowLeft);
			const buttonCurrentPage = screen.getByRole('button', {
				name: 'Página atual'
			});
			expect(buttonCurrentPage).toHaveTextContent('1');
		});

		it('should call handleNext when click on arrow right and disable arrow right', () => {
			makeSut();
			const buttonArrowRight = screen.getByRole('button', {
				name: 'Próxima página'
			});
			for (let i = 0; i < 10; i++) {
				fireEvent.click(buttonArrowRight);
			}
			expect(buttonArrowRight).toBeDisabled();
		});
	});
});
