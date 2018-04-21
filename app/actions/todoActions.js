import { GET_ITEMS, ADD_ITEM, MARK_ITEM_COMPLETE, REMOVE_ITEM } from './type';

let defaultToDoList = [
];
export const getItems = () => dispatch => {
    dispatch({
        type: GET_ITEMS,
        payload: defaultToDoList
    });
};

export const addItem = taskData => dispatch => {
    dispatch({
        type: ADD_ITEM,
        payload: taskData
    });
};

export const markItemComplete = index => dispatch => {
    dispatch({
        type: MARK_ITEM_COMPLETE,
        payload: index
    });
};

export const removeItem = index => dispatch => {
    dispatch({
        type: REMOVE_ITEM,
        payload: index
    });
};

