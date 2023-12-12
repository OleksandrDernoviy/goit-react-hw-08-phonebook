import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App/App';
import './index.css';
import './store/store'
import { Provider } from 'react-redux';
import {store} from './store/store'
import { PersistGate } from 'redux-persist/integration/react';
import {persistor}  from './store/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
