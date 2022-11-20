import { turnIntoCurrency } from '~/app/infra/utils';
import type { CardValuesProps } from './interfaces';

function CardValueComponent({
	value,
	title,
	info,
	icon,
	backgroundColor,
	iconColor
}: CardValuesProps) {
	const handleBackgroundColor = () => {
		const backgrounds = {
			gray: 'bg-gray4',
			green: 'bg-greenDark'
		}[backgroundColor];

		return backgrounds;
	};

	const handleIconColor = () => {
		const backgroundColorIsGreen = backgroundColor === 'green';
		if (!backgroundColorIsGreen) {
			const colors = {
				green: '[&>svg]:fill-greenLight',
				red: '[&>svg]:fill-red'
			}[iconColor];

			return colors;
		}

		return '[&>svg]:fill-white';
	};

	return (
		<div
			className={`${handleBackgroundColor()} text-gray6 rounded-6px w-352px h-137px flex align-middle justify-center flex-col p-32px gap-12px sm:w-280px sm:h-150px`}
			data-testid='card-value'
		>
			<div className={`${handleIconColor()} flex justify-between align-middle`}>
				<p className='text-16px font-medium'>{title}</p>
				{icon}
			</div>
			<div>
				<p className='text-32px font-bold sm:text-24px'>
					{turnIntoCurrency({ value })}
				</p>
				<p className='text-14px font-medium text-gray6'>{info}</p>
			</div>
		</div>
	);
}

export default CardValueComponent;
