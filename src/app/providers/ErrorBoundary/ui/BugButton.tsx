import { FC, useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton:FC = () => {
  const [error, setError] = useState<boolean>(false);
  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return (
    <Button onClick={onThrow}>Throw error</Button>
  );
};
