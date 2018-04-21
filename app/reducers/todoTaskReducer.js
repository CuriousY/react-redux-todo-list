import { GET_ITEMS, ADD_ITEM, MARK_ITEM_COMPLETE, REMOVE_ITEM } from '../actions/type';

const initialState = {
  items: [],
  item: {},
  markCompleteIndex: -1,
  removeItemIndex: -1
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS: return {
      ...state,
      items: action.payload,
      markCompleteIndex: -1,
      removeItemIndex: -1
    };
    case ADD_ITEM:
      return {
        ...state,
        item: action.payload,
        markCompleteIndex: -1,
        removeItemIndex: -1
      };
    case MARK_ITEM_COMPLETE:
      return {
        ...state,
        markCompleteIndex: action.payload,
        removeItemIndex: -1
      };
    case REMOVE_ITEM:
      return {
        ...state,
        removeItemIndex: action.payload,
        markCompleteIndex: -1
      };
    default:
      return state;
  }
}
