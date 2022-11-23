import { render } from '@testing-library/react';
import AccountPostingsPage from './account-postings';

const makeSut = () => render(<AccountPostingsPage />);

describe('AccountPostingsPage', () => {
	test('should render', () => {
		makeSut();
	});
});
