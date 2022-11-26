import { render } from '@testing-library/react';
import BalancesComponent from './balances';

const makeSut = () => render(<BalancesComponent />);

describe('BalancesComponent', () => {
	test('should render', () => {
		makeSut();
	});
});
