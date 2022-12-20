'use client';

import { GlobalLayoutTag } from '~/presentation/common/layouts';
import { RegisterPage } from '~/presentation/pages';

export default function Page() {
  return (
    <GlobalLayoutTag title='Cadastro'>
      <RegisterPage />
    </GlobalLayoutTag>
  );
}
