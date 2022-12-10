import { render, screen } from '@testing-library/react';
import type { SkeletonProps } from './interfaces';
import SkeletonComponent from './skeleton';

const defaultProps = {
	height: 'small'
} as SkeletonProps;

const makeSut = () => render(<SkeletonComponent {...defaultProps} />);

describe('SkeletonComponent', () => {
	it('should render', () => {
		makeSut();
		const component = screen.getByRole('status');
		expect(component).toBeInTheDocument();
	});
});
