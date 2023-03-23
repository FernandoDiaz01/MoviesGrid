import {createStore,compose } from 'redux';
import rootReducer from './reducer'; 
import { devToolsEnhancer } from 'redux-devtools-extension'



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    devToolsEnhancer()
)



export default store;