'use client';

import { CardValueTag, ModalTag } from '~/app/presentation/common';
import ArrowUpCircle from '~/app/presentation/common/icons/arrow-up-circle/arrow-up-circle';
import { GlobalLayoutTag } from '~/app/presentation/common/layouts';

export default function Page() {
  return (
    <GlobalLayoutTag title='Dev'>
      <h1 className='text-32px text-center text-gray6'>In development</h1>
      <CardValueTag
        backgroundColor='gray'
        icon={<ArrowUpCircle />}
        title='Entradas'
        info='Últimas 24 horas'
        value={1000.8}
        iconColor='red'
      />

      <ModalTag isOpen={true} title='Modal'>
        <p>Modal content</p>
      </ModalTag>
    </GlobalLayoutTag>
  );
}
