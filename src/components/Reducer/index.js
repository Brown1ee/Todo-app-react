export const reducer = (state, action) => {
  switch (action.type) {
    case "addToList":
      return [...state, action.todo];
    case "deleteToDoItem":
      return state.filter((item) => item.id !== action.payload);
    case "onChangeToDoItem":
      return state.map((toDoItem) => {
        if (toDoItem.id === action.payload.id)
          return { ...toDoItem, todo: action.payload.editedToDo };
        return toDoItem;
      });
    default:
      return state;
  }
};
