import { ChangeEvent } from 'react';
import type { InputTextProps } from './interfaces';

function InputTextComponent({
	placeholder,
	onChange,
	error,
	value
}: InputTextProps) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};

	const handleError = () => {
		if (error) {
			return 'ring-1 ring-red';
		}
	};

	return (
		<input
			type='text'
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			className={`bg-gray1 rounded-6px p-16px w-full text-16px font-medium text-gray6 focus:outline-none focus:ring-1 focus:ring-greenLight placeholder-gray5 ${handleError()}`}
			aria-label={placeholder}
		/>
	);
}

export default InputTextComponent;
