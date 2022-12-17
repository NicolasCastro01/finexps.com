'use client';

import { GlobalLayoutTag } from '~/app/presentation/common/layouts';
import AccountPostingsPage from '~/app/presentation/pages/account-postings/account-postings';

export default function Page() {
  return (
    <GlobalLayoutTag title='Lançamentos'>
      <AccountPostingsPage />
    </GlobalLayoutTag>
  );
}
