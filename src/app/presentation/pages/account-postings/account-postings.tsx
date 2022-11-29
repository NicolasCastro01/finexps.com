import { ButtonTag } from '~/app/presentation/common/components';
import { BalancesTag } from './components';

function AccountPostingsPage() {
	return (
		<header className='bg-gray1 h-212px py-40px px-160px'>
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
	);
}

export default AccountPostingsPage;
