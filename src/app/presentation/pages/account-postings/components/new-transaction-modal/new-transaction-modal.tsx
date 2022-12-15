import { ChangeEvent, MouseEvent, useState } from 'react';
import { turnIntoCurrency } from '~/app/infra';
import {
  ButtonTag,
  InputTextTag,
  ModalTag,
  SelectButtonTag
} from '~/app/presentation/common/components';
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon
} from '~/app/presentation/common/icons';
import type { NewTransactionModalProps } from './interfaces';

function NewTransactionModalComponent({
  isOpen,
  onClose
}: NewTransactionModalProps) {
  const [state, setState] = useState({
    inbound: false,
    outbound: false,
    description: '',
    price: '',
    category: '',
    errorDescription: false,
    errorPrice: false,
    errorCategory: false
  });

  const handleState = (key: string, value: boolean | number | string) => {
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  const handleSelectButton = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    const inbound = value === 'inbound';
    const outbound = value === 'outbound';
    handleState('inbound', inbound);
    handleState('outbound', outbound);
  };

  const handleInputDescription = (event: ChangeEvent<HTMLInputElement>) => {
    const turnIntoString = String(event.target.value);
    return handleState('description', turnIntoString);
  };

  const handleInputPrice = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const formattedValue = value.replace(/[^0-9,]/g, '').replace(',', '.');
    const turnIntoNumber = Number(formattedValue);
    handleState(
      'price',
      turnIntoCurrency({
        value: turnIntoNumber
      })
    );
  };

  const handleInputCategory = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const turnIntoString = String(value);
    handleState('category', turnIntoString);
  };

  const handleSubmit = () => {
    console.log('submit');
    // TODO: Implement submit
    onClose();
  };

  return (
    <ModalTag title='Nova transação' isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col gap-16px w-full-percent'>
        <InputTextTag
          type='text'
          onBlur={handleInputDescription}
          placeholder='Descrição'
          value={state.description}
          error={state.errorDescription}
        />
        <InputTextTag
          type='text'
          onBlur={e => handleInputPrice(e)}
          placeholder='Preço'
          value={state.price}
          error={state.errorPrice}
        />
        <InputTextTag
          type='text'
          onBlur={handleInputCategory}
          placeholder='Categoria'
          value={state.category}
          error={state.errorCategory}
        />
      </div>
      <div className='flex justify-between w-full-percent'>
        <SelectButtonTag
          icon={<ArrowUpCircleIcon />}
          label='Entrada'
          onClick={e => handleSelectButton(e)}
          selected={state.inbound}
          variant='success'
          value='inbound'
        />
        <SelectButtonTag
          icon={<ArrowDownCircleIcon />}
          label='Saída'
          onClick={e => handleSelectButton(e)}
          selected={state.outbound}
          variant='error'
          value='outbound'
        />
      </div>
      <div className='w-full-percent'>
        <ButtonTag
          backgroundTransparent={false}
          label='Cadastrar'
          onClick={handleSubmit}
          variant='large'
          ariaLabel='Botão para cadastrar uma nova transação'
        />
      </div>
    </ModalTag>
  );
}

export default NewTransactionModalComponent;
