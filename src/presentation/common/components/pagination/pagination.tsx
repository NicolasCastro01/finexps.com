import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '~/presentation/common/icons';
import type { PaginationProps, StateProps } from './interfaces';

function PaginationComponent({ totalPages }: PaginationProps) {
  const [state, setState] = useState({
    currentPage: 1,
    disableArrowLeft: true,
    disableArrowRight: totalPages <= 3
  });

  const handleState = ({ key, value }: StateProps) => {
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleEnableArrowLeft = (page: number) => {
    const currentPageIsOne = page === 1;

    if (currentPageIsOne) {
      return handleState({
        key: 'disableArrowLeft',
        value: true
      });
    }

    return handleState({
      key: 'disableArrowLeft',
      value: false
    });
  };

  const handleEnableArrowRight = (page: number) => {
    const currentPageIsEqualTotalPages = page === totalPages;

    if (currentPageIsEqualTotalPages) {
      return handleState({
        key: 'disableArrowRight',
        value: true
      });
    }

    return handleState({
      key: 'disableArrowRight',
      value: false
    });
  };

  const handleNext = () => {
    const currentPageIsEqualTotalPages = state.currentPage === totalPages;

    if (!currentPageIsEqualTotalPages) {
      const addOnePageInCurrentPage = state.currentPage + 1;
      handleState({
        key: 'currentPage',
        value: addOnePageInCurrentPage
      });
      handleEnableArrowLeft(addOnePageInCurrentPage);
      handleEnableArrowRight(addOnePageInCurrentPage);
    }
  };

  const handlePrevious = () => {
    const currentPageIsEqualOne = state.currentPage === 1;

    if (!currentPageIsEqualOne) {
      const subtractOnePageInCurrentPage = state.currentPage - 1;
      handleState({
        key: 'currentPage',
        value: subtractOnePageInCurrentPage
      });
      handleEnableArrowRight(subtractOnePageInCurrentPage);
      handleEnableArrowLeft(subtractOnePageInCurrentPage);
    }
  };

  return (
    <div
      className='flex justify-center w-216px items-center gap-8px'
      data-testid='pagination'
    >
      <button
        className='[&>svg]:fill-green mr-3 disabled:cursor-default [&>svg]:disabled:fill-gray4'
        onClick={handlePrevious}
        disabled={state.disableArrowLeft}
        aria-label='Página anterior'
      >
        <ArrowLeftIcon />
      </button>
      <button
        className='text-gray7 bg-greenDark w-40px h-40px rounded-6px cursor-default'
        aria-label='Página atual'
      >
        {state.currentPage}
      </button>

      <button
        className='[&>svg]:fill-green ml-3 disabled:cursor-default [&>svg]:disabled:fill-gray4'
        onClick={handleNext}
        disabled={state.disableArrowRight}
        aria-label='Próxima página'
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}

export default PaginationComponent;
