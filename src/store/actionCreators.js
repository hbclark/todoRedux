import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes';


export const changeValue = (e) => ({
    type: CHANGE_INPUT_VALUE,
    value: e.target.value
});

export const addItem = () => ({
    type: ADD_ITEM
});

export const deleteItem = (index) => ({
    type: DELETE_ITEM,
    index
});
