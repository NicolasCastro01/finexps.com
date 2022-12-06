import { fireEvent, render, screen } from '@testing-library/react';
import AccountPostingsPage from './account-postings';

const makeSut = () => render(<AccountPostingsPage />);

describe('Account Postings Page', () => {
	it('should render header', () => {
		makeSut();
		const header = screen.getByTestId('header');
		expect(header).toBeInTheDocument();
	});

	it('should render main', () => {
		makeSut();
		const main = screen.getByTestId('main');
		expect(main).toBeInTheDocument();
	});

	describe('Interaction with widescreen resolution', () => {
		it('should click on new transaction button', () => {
			makeSut();
			const button = screen.getByRole('button', {
				name: 'Botão Nova transação'
			});
			fireEvent.click(button);
			expect(button).toBeInTheDocument();
		});

		it('should click on search button', () => {
			makeSut();
			const button = screen.getByRole('button', {
				name: 'Botão Buscar'
			});
			fireEvent.click(button);
			expect(button).toBeInTheDocument();
		});

		it('should type on search field', () => {
			makeSut();
			const input = screen.getByRole('textbox', {
				name: 'Busque uma transação'
			});
			fireEvent.change(input, { target: { value: 'teste' } });
			expect(input).toBeInTheDocument();
		});
	});

	describe('Interaction with mobile resolution', () => {
		it('should click on new transaction button', () => {
			makeSut();
			const button = screen.getByRole('button', {
				name: 'Botão Buscar Pequeno'
			});
			fireEvent.click(button);
			expect(button).toBeInTheDocument();
		});
	});
});
