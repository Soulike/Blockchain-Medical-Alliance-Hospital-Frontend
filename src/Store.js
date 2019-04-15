import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
// import 所有 Reducer
import {Reducer as AuthProcessorReducer} from './Components/AuthProcessor';
import {Reducer as ModalReducer} from './ComponentContainers/Modal';

// Store 中的初始值，根据开发需要进行改变
const initValues = {
    AuthProcessor: {
        hasLoggedIn: false,
    },
    Modal: {
        currentVisibleModalIdSet: new Set(),
    },
};

// 所有中间件放在此处
const middleWares = [thunk];

const storeEnhancers = compose(
    applyMiddleware(...middleWares),
);

// 所有 Reducer 放在此处
const Reducer = combineReducers({
    AuthProcessor: AuthProcessorReducer,
    Modal: ModalReducer,
});

export default createStore(Reducer, initValues, storeEnhancers);