import { fireEvent, render, screen } from '@testing-library/react';
import InputTextComponent from './input-text';
import type { InputTextProps } from './interfaces';

const defaultProps = {
	placeholder: 'Text',
	onChange: () => jest.fn()
} as InputTextProps;

const makeSut = () => render(<InputTextComponent {...defaultProps} />);

describe('InputTextComponent', () => {
	test('should render', () => {
		makeSut();
		const component = screen.getByRole('textbox', { name: 'Text' });
		expect(component).toBeInTheDocument();
	});

	test('should render with placeholder', () => {
		defaultProps.placeholder = 'Text 2';
		makeSut();
		const component = screen.getByRole('textbox', { name: 'Text 2' });
		expect(component).toBeInTheDocument();
	});

	test('should render with error', () => {
		defaultProps.error = true;
		makeSut();
		const component = screen.getByRole('textbox', { name: 'Text 2' });
		expect(component).toHaveClass('ring-1 ring-red');
	});

	test('should render on change', () => {
		defaultProps.onChange = jest.fn();
		makeSut();
		const component = screen.getByRole('textbox', { name: 'Text 2' });
		fireEvent.change(component, { target: { value: 'typing' } });
		expect(defaultProps.onChange).toHaveBeenCalled();
	});
});
