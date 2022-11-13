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
    <div
      className={`${handleVariant()} py-16px flex justify-center items-center max-w-211px rounded-6px text-16px cursor-pointer gap-8px duration-150 hover:duration-150`}
      onClick={onClick}
      aria-label={`Botão ${label}`}
      role='button'
      tabIndex={0}
    >
      {icon}
      Entrada
    </div>
  );
}

export default SelectButtonComponent;
