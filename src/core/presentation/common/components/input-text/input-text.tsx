import type { InputTextProps } from './interfaces';

function InputTextComponent({
  placeholder,
  onChange,
  error,
  value,
  type,
  onBlur
}: InputTextProps) {
  const handleError = () => {
    if (error) {
      return 'ring-1 ring-red';
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`bg-gray1 rounded-6px p-16px w-full-percent text-16px font-medium text-gray6 focus:outline-none focus:ring-1 focus:ring-greenLight placeholder-gray5 ${handleError()}`}
      aria-label={placeholder}
    />
  );
}

export default InputTextComponent;
