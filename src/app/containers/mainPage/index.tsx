import { memo } from 'react';

import { Button } from 'common/components';
import { useNotifier } from 'hooks/use-notifier';

export const MainPage = memo(() => {
  useNotifier();

  return (
    <div style={{ color: 'red' }}>
      <Button>dddd</Button>
    </div>
  );
});
