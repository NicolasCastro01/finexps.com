'use client';

import {
  ButtonTag,
  CloseIcon,
  InputTextTag,
  ModalTag
} from '~/app/presentation/common';
import { GlobalLayoutTag } from '~/app/presentation/common/layouts';

export default function Page() {
  return (
    <GlobalLayoutTag title='Dev'>
      <h1 className='text-32px text-center text-gray6'>In development</h1>
      <ModalTag title='Nova transação' isOpen={true} iconClose={<CloseIcon />}>
        <InputTextTag
          onChange={() => {
            return;
          }}
          placeholder='Título'
        />
        <ButtonTag
          backgroundTransparent={false}
          onClick={() => {
            return;
          }}
          variant='large'
          label='Salvar'
        />
      </ModalTag>
    </GlobalLayoutTag>
  );
}
