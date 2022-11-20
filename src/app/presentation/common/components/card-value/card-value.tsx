import ArrowUpCircle from '~/app/presentation/common/icons/arrow-up-circle/arrow-up-circle';

function CardValueComponent() {
	return (
		<div className='bg-gray4 text-gray6 rounded-6px w-352px h-137px flex align-middle justify-center flex-col p-32px gap-12px'>
			<div className='[&>svg]:fill-red flex justify-between align-middle'>
				<p className='text-16px font-medium'>Entradas</p>
				<ArrowUpCircle />
			</div>
			<div>
				<p className='text-32px font-bold'>R$ 17.400,00</p>
			</div>
		</div>
	);
}

export default CardValueComponent;
