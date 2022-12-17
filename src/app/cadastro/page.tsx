'use client';

import { GlobalLayoutTag } from '~/app/presentation/common/layouts';
import { RegisterPage } from '~/app/presentation/pages';

export default function Page() {
  return (
    <GlobalLayoutTag title='Cadastro'>
      <RegisterPage />
    </GlobalLayoutTag>
  );
}
