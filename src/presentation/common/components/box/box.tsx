import type { BoxProps } from './interfaces';

function BoxComponent({ title, children }: BoxProps) {
  return (
    <div
      className='bg-gray2 px-48px pt-48px pb-32px rounded-6px w-535px sm:w-full-percent sm:px-20px sm:py-20px'
      role='presentation'
      aria-label={`Box ${title}`}
    >
      <div className='flex justify-start'>
        <p className='text-gray7 text-24px font-bold'>{title}</p>
      </div>
      {children}
    </div>
  );
}

export default BoxComponent;
