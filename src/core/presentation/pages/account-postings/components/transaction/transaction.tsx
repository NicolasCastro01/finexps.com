import { turnIntoCurrency } from '~/core/infra';
import { CalendarIcon, TagIcon } from '~/core/presentation/common/icons';
import type { TransactionProps } from './interfaces';

function TransactionComponent({
  amount,
  category,
  date,
  description,
  type
}: TransactionProps) {
  const handleType = () => {
    const colors = {
      outbound: 'text-red',
      inbound: 'text-greenLight'
    }[type];

    return colors;
  };

  const handleAmount = () => {
    const typeIsOutbound = type === 'outbound';
    const amountToCurrency = turnIntoCurrency({ value: amount });
    if (!typeIsOutbound) {
      return amountToCurrency;
    }

    return `- ${amountToCurrency}`;
  };

  return (
    <div
      className='items-center gap-8px justify-between flex bg-gray3 h-66px px-32px rounded-5px text-gray6 text-16px font-medium sm:flex-col sm:h-140px sm:p-29px sm:items-start sm:gap-8px'
      data-testid='transaction'
    >
      <div className='w-400px lg:w-216px md:w-216px sm:w-full-percent'>
        <p>{description}</p>
      </div>
      <p
        className={`sm:text-20px sm:font-bold ${handleType()}`}
        data-testid='amount'
      >
        {handleAmount()}
      </p>
      <div className='flex xl:w-340px lg:w-216px md:w-216px justify-between sm:w-full-percent'>
        <div className='[&>svg]:hidden flex [&>svg]:fill-gray5 items-center gap-4px [&>svg]:sm:block'>
          <TagIcon />
          <p className='sm:text-gray5'>{category}</p>
        </div>
        <div className='[&>svg]:hidden flex [&>svg]:fill-gray5 items-center gap-4px [&>svg]:sm:block'>
          <CalendarIcon />
          <p className='sm:text-gray5'>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionComponent;
