'use client';

import { GlobalLayoutTag } from '~/core/presentation/common/layouts';
import { LoginPage } from '~/core/presentation/pages';

export default function Page() {
  return (
    <GlobalLayoutTag title='Login'>
      <LoginPage />
    </GlobalLayoutTag>
  );
}
