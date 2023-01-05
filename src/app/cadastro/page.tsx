'use client';

import { GlobalLayoutTag } from '~/core/presentation/common/layouts';
import { RegisterPage } from '~/core/presentation/pages';

export default function Page() {
  return (
    <GlobalLayoutTag title='Cadastro'>
      <RegisterPage />
    </GlobalLayoutTag>
  );
}
