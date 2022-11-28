import { render, screen } from '@testing-library/react';
import ButtonComponent from './button';
import type { ButtonProps } from './interfaces';

const defaultProps = {
	backgroundTransparent: true,
	onClick: () => jest.fn(),
	variant: 'medium',
	label: 'Buscar'
} as ButtonProps;

const makeSut = () => render(<ButtonComponent {...defaultProps} />);

describe('ButtonComponent', () => {
	test('should render', () => {
		makeSut();
		const component = screen.getByRole('button', { name: 'Botão Buscar' });
		expect(component).toBeInTheDocument();
	});

	test('should render with label', () => {
		makeSut();
		const label = screen.getByText('Buscar');
		expect(label).toBeInTheDocument();
	});

	test('should render without background transparent', () => {
		defaultProps.backgroundTransparent = false;
		makeSut();
		const component = screen.getByRole('button', { name: 'Botão Buscar' });
		expect(component).toHaveClass('bg-greenDark');
	});

	test('should render with background transparent', () => {
		defaultProps.backgroundTransparent = true;
		makeSut();
		const component = screen.getByRole('button', { name: 'Botão Buscar' });
		expect(component).toHaveClass('bg-transparent');
	});
});
