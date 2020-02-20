import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { save } from 'redux-localstorage-simple';
import thunk from 'redux-thunk';

const middleware = [save({ namespace: 'swapi'}), thunk];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;