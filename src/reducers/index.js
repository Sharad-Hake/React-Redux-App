import todoReducers from './todoReducers';
import newtodoReducers from './newTodoReducers';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todoReducers , //you can add multiple reducers here...
    newtodoReducers
})
export default rootReducer;