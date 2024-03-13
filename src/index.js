import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { addBestieById } from './actions';
import App from './components/App';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addBestieById(4));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
