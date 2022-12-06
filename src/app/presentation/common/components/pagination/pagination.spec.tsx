import { render } from '@testing-library/react';
import PaginationComponent from './pagination';

const makeSut = () => render(<PaginationComponent />);

describe('PaginationComponent', () => {
	test('should render', () => {
		makeSut();
	});
});
