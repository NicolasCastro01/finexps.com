import { render } from '@testing-library/react';
import TransactionComponent from './transaction';

const makeSut = () => render(<TransactionComponent />);

describe('TransactionComponent', () => {
	test('should render', () => {
		makeSut();
	});
});
