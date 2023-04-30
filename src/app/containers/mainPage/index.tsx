import { memo } from 'react';

import { useNotifier } from 'hooks/use-notifier';

export const MainPage = memo(() => {
  useNotifier();

  return <div>Trial</div>;
});
