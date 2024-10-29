import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ContactList from './components/ContactList';

const App: React.FC = () => (
  <Provider store={store}>
    <ContactList />
  </Provider>
);

export default App;
