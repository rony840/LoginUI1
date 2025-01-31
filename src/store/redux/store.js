import {createStore, combineReducers, applyMiddleware} from 'redux';
import calculatorReducer from './reducers/calculatorReducer';
import todoReducer from './reducers/todoReducer';
import logger from 'redux-logger';
const rootReducer = combineReducers({
    calc: calculatorReducer,
    todo: todoReducer
})

const store = ()=>{
    return createStore(rootReducer, applyMiddleware(logger));
}

export default store;