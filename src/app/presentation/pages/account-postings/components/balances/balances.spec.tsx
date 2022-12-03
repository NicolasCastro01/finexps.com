import { fireEvent, render, screen } from '@testing-library/react';
import BalancesComponent from './balances';

const makeSut = () => render(<BalancesComponent />);

describe('Balances component', () => {
	it('should render', () => {
		makeSut();
		const component = screen.getByTestId('balances');
		expect(component).toBeInTheDocument();
	});

	describe('Interaction', () => {
		it('should move to down', () => {
			makeSut();
			const component = screen.getByTestId('balances');
			fireEvent.mouseDown(component);
			fireEvent.mouseMove(component, { movementX: 100 });
			fireEvent.mouseUp(component);
			expect(component).toBeInTheDocument();
		});

		it('should move to up', () => {
			makeSut();
			const component = screen.getByTestId('balances');
			fireEvent.mouseDown(component);
			fireEvent.mouseMove(component, { movementX: -100 });
			fireEvent.mouseUp(component);
			expect(component).toBeInTheDocument();
		});
	});
});
