import { useState } from 'react';
import {
	ButtonTag,
	InputTextTag,
	PaginationTag
} from '~/app/presentation/common/components';
import { FinexpsIcon, SearchIcon } from '~/app/presentation/common/icons';
import {
	BalancesTag,
	NewTransactionModalTag,
	TransactionTag
} from './components';

function AccountPostingsPage() {
	const [state, setState] = useState({
		openModalNewTransaction: false
	});

	const handleState = (key: string, value: boolean) => {
		setState(prevState => ({ ...prevState, [key]: value }));
	};

	const handleOpenModalNewTransaction = () => {
		handleState('openModalNewTransaction', true);
	};

	const handleCloseModalNewTransaction = () => {
		handleState('openModalNewTransaction', false);
	};

	const handleModalNewTransactionComponent = () => {
		const openModalIsTrue = state.openModalNewTransaction;
		if (openModalIsTrue) {
			return (
				<NewTransactionModalTag
					isOpen={openModalIsTrue}
					onClose={handleCloseModalNewTransaction}
				/>
			);
		}
	};

	return (
		<>
			<header
				className='bg-gray1 h-212px py-40px px-160px md:px-20px sm:px-20px'
				data-testid='header'
			>
				<div className='flex justify-between'>
					<div className='[&>svg]:fill-green'>
						<FinexpsIcon />
					</div>
					<ButtonTag
						backgroundTransparent={false}
						onClick={() => handleOpenModalNewTransaction()}
						variant='medium'
						label='Nova transação'
						ariaLabel='Botão para abrir modal de nova transação'
					/>
				</div>
				<div className='mt-10'>
					<BalancesTag />
				</div>
			</header>
			<section className='mt-24 px-160px md:px-20px sm:px-20px flex justify-between gap-16px'>
				<div className='w-full-percent'>
					<InputTextTag
						type='text'
						onChange={e => console.log(e.target.value)}
						placeholder='Busque uma transação'
					/>
				</div>
				<div className='sm:hidden'>
					<ButtonTag
						backgroundTransparent
						onClick={() => console.log('click')}
						variant='medium'
						label='Buscar'
						icon={<SearchIcon />}
						ariaLabel='Botão para buscar uma transação'
					/>
				</div>
				<div className='hidden sm:block'>
					<ButtonTag
						backgroundTransparent
						onClick={() => console.log('click')}
						variant='small'
						ariaLabel='Botão pequeno para buscar uma transação'
						icon={<SearchIcon />}
					/>
				</div>
			</section>
			<main
				className='mt-7 px-160px md:px-20px sm:px-20px flex flex-col justify-between gap-8px'
				data-testid='main'
			>
				{Array.from({ length: 4 }).map((_, index) => (
					<TransactionTag
						amount={1000}
						category='Venda'
						date='13/04/2022'
						description='Descrição da transação'
						type='outbound'
						key={index}
					/>
				))}
			</main>
			<section className='mt-10 mb-10 flex justify-center'>
				<PaginationTag totalPages={10} />
			</section>
			{handleModalNewTransactionComponent()}
		</>
	);
}

export default AccountPostingsPage;
