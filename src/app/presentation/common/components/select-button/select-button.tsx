import type { SelectButtonProps } from './interfaces';

function SelectButtonComponent({
	icon,
	label,
	onClick,
	selected,
	variant
}: SelectButtonProps) {
	const handleVariant = () => {
		if (selected) {
			const variants = {
				error: 'bg-redDark text-white [&>svg]:fill-white hover:bg-redDark',
				success: 'bg-greenDark text-white [&>svg]:fill-white hover:bg-greenDark'
			}[variant];
			return variants;
		}

		return {
			error: 'bg-gray3 text-gray6 [&>svg]:fill-greenLight hover:bg-gray4',
			success: 'bg-gray3 text-gray6 [&>svg]:fill-greenLight hover:bg-gray4'
		}[variant];
	};
	return (
		<button
			type='button'
			className={`${handleVariant()} py-16px flex justify-center items-center max-w-211px min-w-159px rounded-6px text-16px cursor-pointer gap-8px duration-150 hover:duration-150`}
			onClick={onClick}
			aria-label={`Botão ${label}`}
		>
			{icon}
			Entrada
		</button>
	);
}

export default SelectButtonComponent;
