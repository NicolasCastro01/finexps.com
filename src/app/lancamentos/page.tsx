'use client';

import { GlobalLayoutTag } from '~/core/presentation/common/layouts';
import AccountPostingsPage from '~/core/presentation/pages/account-postings/account-postings';

export default function Page() {
  return (
    <GlobalLayoutTag title='Lançamentos'>
      <AccountPostingsPage />
    </GlobalLayoutTag>
  );
}
