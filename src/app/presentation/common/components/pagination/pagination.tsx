import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '~/app/presentation/common/icons';
import type { PaginationProps, StateProps } from './interfaces';

function PaginationComponent({ totalPages }: PaginationProps) {
	const [state, setState] = useState({
		firstPosition: 1,
		secondPosition: 2,
		thirdPosition: 3
	});

	const handleState = ({ key, value }: StateProps) => {
		setState(prevState => ({
			...prevState,
			[key]: value
		}));
	};

	const handleNext = () => {
		const firstPositionIsEqualTotalPages = state.firstPosition === totalPages;

		if (firstPositionIsEqualTotalPages) {
			return;
		}

		handleState({
			key: 'firstPosition',
			value: state.firstPosition + 1
		});
		handleState({
			key: 'secondPosition',
			value: state.secondPosition + 1
		});
		handleState({
			key: 'thirdPosition',
			value: state.thirdPosition + 1
		});
	};

	const handlePrevious = () => {
		const firstPositionIsOne = state.firstPosition === 1;

		if (firstPositionIsOne) {
			return;
		}

		handleState({
			key: 'firstPosition',
			value: state.firstPosition - 1
		});
		handleState({
			key: 'secondPosition',
			value: state.secondPosition - 1
		});
		handleState({
			key: 'thirdPosition',
			value: state.thirdPosition - 1
		});
	};

	const handleEnableArrowLeft = () => {
		const firstPositionIsOne = state.firstPosition === 1;

		if (firstPositionIsOne) {
			return '[&>svg]:fill-gray4';
		}

		return '[&>svg]:fill-green';
	};

	const handleEnableArrowRight = () => {
		const thirdPositionIsEqualTotalPages = state.thirdPosition === totalPages;

		if (thirdPositionIsEqualTotalPages) {
			return '[&>svg]:fill-gray4';
		}

		return '[&>svg]:fill-green';
	};

	const handleButtonPageClick = (page: number) => {
		if (page === totalPages) {
			return;
		}

		handleState({
			key: 'firstPosition',
			value: page
		});
		handleState({
			key: 'secondPosition',
			value: page + 1
		});
		handleState({
			key: 'thirdPosition',
			value: page + 2
		});
	};

	return (
		<div className='flex justify-center w-216px items-center gap-8px'>
			<button
				className={`${handleEnableArrowLeft()} mr-3`}
				onClick={handlePrevious}
			>
				<ArrowLeftIcon />
			</button>
			<button
				className='text-gray7 bg-greenDark w-40px h-40px rounded-6px'
				onClick={() => handleButtonPageClick(state.firstPosition)}
			>
				{state.firstPosition}
			</button>
			<button
				className='text-gray7 bg-gray4 w-40px h-40px rounded-6px'
				onClick={() => handleButtonPageClick(state.secondPosition)}
			>
				{state.secondPosition}
			</button>
			<button
				className='text-gray7 bg-gray4 w-40px h-40px rounded-6px'
				onClick={() => handleButtonPageClick(state.thirdPosition)}
			>
				{state.thirdPosition}
			</button>
			<button
				className={`${handleEnableArrowRight()} ml-3`}
				onClick={handleNext}
			>
				<ArrowRightIcon />
			</button>
		</div>
	);
}

export default PaginationComponent;
