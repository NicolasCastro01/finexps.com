import type { ButtonProps } from './interfaces';

function ButtonComponent({
  label,
  onClick,
  backgroundTransparent,
  disabled,
  icon,
  variant
}: ButtonProps) {
  const handleVariant = () => {
    const variants = {
      small: 'py-8px px-16px text-8px',
      medium: 'py-12px px-20px text-16px',
      large: 'py-16px px-32px text-16px'
    }[variant];

    return variants;
  };

  const handleBackground = () => {
    const backgroundTransparentIsTrue = backgroundTransparent;
    if (backgroundTransparentIsTrue) {
      return 'bg-transparent border-1px border-greenLight text-greenLight hover:bg-green hover:border-green hover:text-white w-full';
    }

    return 'bg-greenDark text-white hover:bg-greenLight text-white';
  };

  return (
    <button
      type='button'
      className={`
				rounded-6px 
				duration-150 
				font-bold
			 hover:duration-150
			 flex
			 justify-center
			 gap-12px
       w-full
			 ${handleBackground()}
			 ${handleVariant()}`}
      aria-label={`Botão ${label}`}
      onClick={onClick}
      data-testid='button'
      disabled={disabled}
    >
      {icon}
      {label}
    </button>
  );
}

export default ButtonComponent;
