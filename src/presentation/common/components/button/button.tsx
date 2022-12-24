import { CircularLoadingTag } from '~/presentation/common/components/circular-loading';
import type { ButtonProps } from './interfaces';

function ButtonComponent({
  label,
  onClick,
  backgroundTransparent,
  disabled,
  icon,
  variant,
  ariaLabel,
  loading
}: ButtonProps) {
  const handleVariant = () => {
    const variants = {
      small: 'w-54px h-54px text-8px',
      medium: 'text-16px w-152px h-54px',
      large: 'py-16px px-32px w-full-percent text-16px'
    }[variant];

    return variants;
  };

  const handleBackground = () => {
    const backgroundTransparentIsTrue = backgroundTransparent;
    if (backgroundTransparentIsTrue) {
      return 'bg-transparent border-1px border-greenLight text-greenLight hover:bg-green hover:border-green hover:text-white [&>svg]:fill-greenLight disabled:hover:bg-transparent';
    }

    return 'bg-greenDark text-white hover:bg-greenLight text-white [&>svg]:fill-white disabled:hover:bg-greenDark';
  };

  const handleLoading = () => {
    if (!loading) {
      return (
        <>
          {icon}
          {label}
        </>
      );
    }

    return <CircularLoadingTag />;
  };

  const isDisabled = disabled || loading;

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
			 items-center	
			 disabled:opacity-50
			 ${handleBackground()}
			 ${handleVariant()}`}
      aria-label={ariaLabel}
      onClick={onClick}
      data-testid='button'
      disabled={isDisabled}
    >
      {handleLoading()}
    </button>
  );
}

export default ButtonComponent;
