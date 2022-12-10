import {
	ButtonTag,
	InputTextTag,
	PaginationTag
} from '~/app/presentation/common/components';
import { FinexpsIcon, SearchIcon } from '~/app/presentation/common/icons';
import { BalancesTag, TransactionTag } from './components';

function AccountPostingsPage() {
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
						onClick={() => console.log('click')}
						variant='medium'
						label='Nova transação'
						ariaLabel='Botão Nova transação'
					/>
				</div>
				<div className='mt-10'>
					<BalancesTag />
				</div>
			</header>
			<section className='mt-24 px-160px md:px-20px sm:px-20px flex justify-between gap-16px'>
				<div className='w-full'>
					<InputTextTag
						onChange={e => console.log(e)}
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
						ariaLabel='Botão Buscar'
					/>
				</div>
				<div className='hidden sm:block'>
					<ButtonTag
						backgroundTransparent
						onClick={() => console.log('click')}
						variant='small'
						icon={<SearchIcon />}
						ariaLabel='Botão Buscar Pequeno'
					/>
				</div>
			</section>
			<main
				className='mt-7 px-160px md:px-20px sm:px-20px flex flex-col justify-between gap-8px'
				data-testid='main'
			>
				<TransactionTag
					amount={1000}
					category='Venda'
					date='13/04/2022'
					description='Descrição da transação'
					type='outbound'
				/>
				<TransactionTag
					amount={1000}
					category='Venda'
					date='13/04/2022'
					description='Descrição da transação'
					type='inbound'
				/>
				<TransactionTag
					amount={1000}
					category='Venda'
					date='13/04/2022'
					description='Descrição da transação'
					type='outbound'
				/>
				<TransactionTag
					amount={1000}
					category='Venda'
					date='13/04/2022'
					description='Descrição da transação'
					type='inbound'
				/>
			</main>
			<section className='mt-10 mb-10 flex justify-center'>
				<PaginationTag totalPages={10} />
			</section>
		</>
	);
}

export default AccountPostingsPage;
