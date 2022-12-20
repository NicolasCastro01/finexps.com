'use client';

import { GlobalLayoutTag } from '~/presentation/common/layouts';
import { LoginPage } from '~/presentation/pages';

export default function Page() {
  return (
    <GlobalLayoutTag title='Login'>
      <LoginPage />
    </GlobalLayoutTag>
  );
}
