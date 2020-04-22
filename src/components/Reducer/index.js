export const reducer = (state, action) => {
  switch (action.type) {
    case "addToList":
      return [...state, action.todo];
    case "deleteToDoItem":
      return state.filter((item) => item.id !== action.payload);
    case "onChangeToDoItem":
      let prevState = [...state];
      prevState[prevState.findIndex((elem) => elem.id === action.payload.id)].todo = action.payload.editedToDo;
      return prevState;
    default:
      return state;
  }
};
