import React from 'react';
import RootStack from './navigate/RootStack.tsx';
import {Provider} from 'react-redux';
import {store} from './state/store.ts';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
export default App;
