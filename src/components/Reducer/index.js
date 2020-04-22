export const reducer = (state, action) => {
  switch (action.type) {
    case "addToList":
      return [...state, action.todo];
    case "deleteToDoItem":
      return action.payload;
    case "onChangeToDoItem":
        return action.todoList
    default:
      return state;
  }
};
