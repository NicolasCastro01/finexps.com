'use client';

import { CardValueTag } from '~/app/presentation/common';
import { GlobalLayoutTag } from '~/app/presentation/common/layouts';

export default function Page() {
  return (
    <GlobalLayoutTag title='Dev'>
      <h1 className='text-32px text-center text-gray6'>In development</h1>
      <CardValueTag />
    </GlobalLayoutTag>
  );
}
