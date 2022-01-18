import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { store } from './src/redux/store/';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
