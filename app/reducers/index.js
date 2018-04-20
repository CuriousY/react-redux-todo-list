import { combineReducers } from 'redux';
import todoTaskReducer from './todoTaskReducer';
import markCompleteReducer from './markCompleteReducer';

const allReducers = combineReducers({
    todoTasks:todoTaskReducer
});

export default allReducers;