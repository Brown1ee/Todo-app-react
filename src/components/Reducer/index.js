import {ADD_TO_LIST, DELETE_TO_DO_ITEM, ON_CHANGE_TO_DO_ITEM} from './actionType'

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_TO_LIST:
      return [...state, payload];
    case DELETE_TO_DO_ITEM:
      return state.filter((item) => item.id !== payload);
    case ON_CHANGE_TO_DO_ITEM:
      return state.map((toDoItem) => {
        if (toDoItem.id === payload.id)
          return { ...toDoItem, todo: payload.editedToDo };
        return toDoItem;
      });
    default:
      return state;
  }
};
