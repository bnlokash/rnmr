import React from 'react';
import { Provider } from 'react-redux'
import store from 'src/redux';

import { Root } from 'src/components';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

