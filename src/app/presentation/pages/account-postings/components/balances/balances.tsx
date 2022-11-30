import { useRef } from 'react';
import { CardValueTag } from '~/app/presentation/common/components';
import {
	ArrowDownCircleIcon,
	ArrowUpCircleIcon,
	DollarCircleIcon
} from '~/app/presentation/common/icons';

function BalancesComponent() {
	const ref = useRef<HTMLDivElement>(null);

	const mouseMove = (e: MouseEvent) => {
		if (ref.current) {
			ref.current.scrollLeft -= e.movementX;
		}
	};

	const mouseUp = () => {
		document.removeEventListener('mousemove', mouseMove);
		document.removeEventListener('mouseup', mouseUp);
	};

	const mouseDown = () => {
		document.addEventListener('mousemove', mouseMove);
		document.addEventListener('mouseup', mouseUp);
	};

	return (
		<div
			className='flex gap-32px justify-between sm:gap-12px w-full sm:justify-start cursor-pointer select-none sm:overflow-x-scroll scrollbar-none rounded-6px'
			ref={ref}
			onMouseDown={mouseDown}
		>
			<div>
				<CardValueTag
					backgroundColor='gray'
					icon={<ArrowUpCircleIcon />}
					iconColor='green'
					info='Última entrada em 13 de abril'
					title='Entradas'
					value={1000}
				/>
			</div>
			<div>
				<CardValueTag
					backgroundColor='gray'
					icon={<ArrowDownCircleIcon />}
					iconColor='red'
					info='Última saída em 13 de abril'
					title='Saídas'
					value={1000}
				/>
			</div>
			<div>
				<CardValueTag
					backgroundColor='green'
					icon={<DollarCircleIcon />}
					iconColor='green'
					info='De 15/03/22 até 13/04/22'
					title='Total'
					value={1000}
				/>
			</div>
		</div>
	);
}

export default BalancesComponent;
