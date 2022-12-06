import { ArrowLeftIcon, ArrowRightIcon } from '~/app/presentation/common/icons';

function PaginationComponent() {
	return (
		<div className='flex justify-center w-216px items-center gap-8px'>
			<button className='[&>svg]:fill-gray4 mr-3'>
				<ArrowLeftIcon />
			</button>
			<button className='text-gray7 bg-greenDark w-40px h-40px rounded-6px'>
				1
			</button>
			<button className='text-gray bg-gray4 w-40px h-40px rounded-6px'>
				2
			</button>
			<button className='text-gray bg-gray4 w-40px h-40px rounded-6px'>
				3
			</button>
			<button className='[&>svg]:fill-gray4 ml-3'>
				<ArrowRightIcon />
			</button>
		</div>
	);
}

export default PaginationComponent;
