import {  MARK_ITEM_COMPLETE } from '../actions/type';

const initialState = {
  markCompleteIndex: -1
};

export default function (state = initialState, action) { 
  switch (action.type) {
    case MARK_ITEM_COMPLETE:
      return {
        markCompleteIndex: action.payload
      };
    default:
      return state;
  }
}
