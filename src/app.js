import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';
import { setTextFilter } from './actions/filters';
import getVisibleItems from './selectors/items';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addItem({description: 'long shirt', amount: 4500}));
store.dispatch(addItem({description: 'short shirt', createdAt: 1000}));
store.dispatch(addItem({description: 'Pants', amount: 109500}));

const state = store.getState();
const visibleItems = getVisibleItems(state.items, state.filters);
console.log(visibleItems);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
