import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
  } = props;
  const store = createReduxStore(initialState as StateSchema);
  return (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
<Provider store={store}>
    {children}
</Provider>
  );
};
