import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewTransactionModalComponent from './new-transaction-modal';

const defaultProps = {
	isOpen: true,
	onClose: jest.fn()
};

const makeSut = () =>
	render(<NewTransactionModalComponent {...defaultProps} />);

describe('New transaction modal component', () => {
	describe('Render', () => {
		it('should render', () => {
			makeSut();
			const component = screen.getByRole('dialog', { name: 'Nova transação' });
			expect(component).toBeInTheDocument();
		});

		it('should render with button inbound', () => {
			makeSut();
			const button = screen.getByRole('button', { name: 'Botão Entrada' });
			expect(button).toBeInTheDocument();
		});

		it('should render with input text description', () => {
			makeSut();
			const input = screen.getByRole('textbox', { name: 'Descrição' });
			expect(input).toBeInTheDocument();
		});

		it('should render with input text price', () => {
			makeSut();
			const input = screen.getByRole('textbox', { name: 'Preço' });
			expect(input).toBeInTheDocument();
		});

		it('should render with input text category', () => {
			makeSut();
			const input = screen.getByRole('textbox', { name: 'Categoria' });
			expect(input).toBeInTheDocument();
		});

		it('should render with button submit', () => {
			makeSut();
			const button = screen.getByRole('button', {
				name: 'Botão para cadastrar uma nova transação'
			});
			expect(button).toBeInTheDocument();
		});
	});

	describe('Interaction', () => {
		it('should click on button inbound', async () => {
			makeSut();
			const button = screen.getByRole('button', { name: 'Botão Entrada' });
			fireEvent.click(button);
			waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
		});

		it('should click on button outbound', async () => {
			makeSut();
			const button = screen.getByRole('button', { name: 'Botão Saída' });
			fireEvent.click(button);
			waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
		});

		it('should type on input text description', () => {
			makeSut();
			const input = screen.getByRole('textbox', { name: 'Descrição' });
			fireEvent.blur(input, { target: { value: 'Teste' } });
			expect(input).toHaveValue('Teste');
		});

		it('should type on input text price', () => {
			makeSut();
			const input = screen.getByRole('textbox', { name: 'Preço' });
			fireEvent.blur(input, { target: { value: '100' } });
			expect(input).toHaveValue('100');
		});

		it('should type on input text category', () => {
			makeSut();
			const input = screen.getByRole('textbox', { name: 'Categoria' });
			fireEvent.blur(input, { target: { value: 'Teste' } });
			expect(input).toHaveValue('Teste');
		});

		it('should click on button submit', async () => {
			makeSut();
			const button = screen.getByRole('button', {
				name: 'Botão para cadastrar uma nova transação'
			});
			fireEvent.click(button);
			waitFor(() => expect(button).toHaveAttribute('aria-pressed', 'true'));
		});
	});
});
