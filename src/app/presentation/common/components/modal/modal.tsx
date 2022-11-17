import { useState } from 'react';
import { CloseIcon } from '~/app/presentation/common/icons';
import type { ModalProps } from './interfaces';

function ModalComponent({ children, title }: ModalProps) {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  const Header = () => (
    <div className='flex justify-start items-center px-48px sm:px-24px'>
      <h1 className='text-24px text-gray7 font-bold'>{title}</h1>
    </div>
  );

  const Body = () => (
    <div className='relative flex flex-col justify-start items-center px-48px py-32px gap-24px sm:px-24px'>
      {children}
    </div>
  );

  const handleModal = () => {
    if (close) {
      return <div />;
    }

    return (
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-1 outline-none focus:outline-none h-screen w-screen bg-gray-900 bg-opacity-50 sm:items-end'>
        <div
          className='bg-gray2 rounded-6px w-535px sm:w-full sm:rounded-t-20px'
          aria-modal='true'
          role='dialog'
        >
          <div className='flex justify-end pt-24px pr-24px'>
            <button
              className='text-gray6 text-24px [&>svg]:fill-gray5 sm:text-20px'
              aria-label='Fechar modal'
              onClick={handleClose}
            >
              <CloseIcon />
            </button>
          </div>
          <Header />
          <Body />
        </div>
      </div>
    );
  };

  return handleModal();
}

export default ModalComponent;
