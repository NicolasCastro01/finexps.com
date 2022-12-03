import { render, screen } from '@testing-library/react';
import type { TransactionProps } from './interfaces';
import TransactionComponent from './transaction';

const defaultProps = {
	amount: 1000,
	category: 'Venda',
	date: '13/04/2022',
	description: 'Descrição da transação',
	type: 'outbound'
} as TransactionProps;

const makeSut = () => render(<TransactionComponent {...defaultProps} />);

describe('Transaction component', () => {
	it('should render', () => {
		makeSut();
		const component = screen.getByTestId('transaction');
		expect(component).toBeInTheDocument();
	});

	// test type
	describe('Transaction type', () => {
		it('should render outbound type', () => {
			makeSut();
			const labelAmount = screen.getByTestId('amount');
			expect(labelAmount).toHaveClass('text-red');
		});

		it('should render inbound type', () => {
			defaultProps.type = 'inbound';
			makeSut();
			const labelAmount = screen.getByTestId('amount');
			expect(labelAmount).toHaveClass('text-greenLight');
		});
	});
});
