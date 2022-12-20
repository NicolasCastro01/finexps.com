'use client';

import { GlobalLayoutTag } from '~/presentation/common/layouts';
import AccountPostingsPage from '~/presentation/pages/account-postings/account-postings';

export default function Page() {
  return (
    <GlobalLayoutTag title='Lançamentos'>
      <AccountPostingsPage />
    </GlobalLayoutTag>
  );
}
