import { turnIntoCurrency } from '~/app/infra';
import { TransactionProps } from './interfaces';

function TransactionComponent({
	amount,
	category,
	date,
	description,
	type
}: TransactionProps) {
	const handleType = () => {
		const colors = {
			outbound: 'text-red',
			inbound: 'text-greenLight'
		}[type];

		return colors;
	};

	const handleAmount = () => {
		const typeIsOutbound = type === 'outbound';
		const amountToCurrency = turnIntoCurrency({ value: amount });
		if (!typeIsOutbound) {
			return amountToCurrency;
		}

		return `- ${amountToCurrency}`;
	};

	return (
		<div
			className='items-center justify-between flex bg-gray3 h-66px px-32px rounded-5px text-gray6 text-16px font-medium'
			data-testid='transaction'
		>
			<div className='w-400px lg:w-280px'>
				<p>{description}</p>
			</div>
			<p className={handleType()} data-testid='amount'>
				{handleAmount()}
			</p>
			<p>Venda</p>
			<p>13/04/2022</p>
		</div>
	);
}

export default TransactionComponent;
