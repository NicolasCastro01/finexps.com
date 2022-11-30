import { ButtonTag, InputTextTag } from '~/app/presentation/common/components';
import { SearchIcon } from '~/app/presentation/common/icons';
import { BalancesTag } from './components';

function AccountPostingsPage() {
	return (
		<>
			<header className='bg-gray1 h-212px py-40px px-160px sm:px-20px'>
				<div className='flex justify-end'>
					<ButtonTag
						backgroundTransparent={false}
						onClick={() => console.log('click')}
						variant='medium'
						label='Nova transação'
					/>
				</div>
				<div className='mt-10'>
					<BalancesTag />
				</div>
			</header>
			<section className='mt-24 px-160px sm:px-20px flex justify-between gap-16px'>
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
					/>
				</div>
				<div className='hidden sm:block'>
					<ButtonTag
						backgroundTransparent
						onClick={() => console.log('click')}
						variant='small'
						icon={<SearchIcon />}
					/>
				</div>
			</section>
		</>
	);
}

export default AccountPostingsPage;
