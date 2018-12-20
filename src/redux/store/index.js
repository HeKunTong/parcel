import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware  } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middlewares = [thunk, routerMiddleware(createBrowserHistory()), createLogger()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    window.__INITIAL_STATE__ || {},
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
);

