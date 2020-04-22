import React, { createContext, useReducer } from "react";
import { AddtoDo } from "../../components/AddtoDo/index.js";
import { List } from "../List/index";
import { reducer } from "../../components/Reducer";
export const ToDoContext = createContext({});

export const Main = () => {

  const [todoItemsList, dispatch] = useReducer(reducer, []);
  const sendTodoItem = (todo) => {
    dispatch({ type: "addToList", todo });
  };

  const deleteToDoItem = (idOfItemToDelete) => {
    dispatch({ type: "deleteToDoItem", payload: idOfItemToDelete });
  };

  const onChangeToDoItem = (editedToDo, id) => {
    if (!editedToDo) {
      deleteToDoItem(id);
    } else {
      dispatch({ type: "onChangeToDoItem", payload:{id, editedToDo} });
    }
  };

  const contextValue = {
    todoItemsList,
    onChangeToDoItem,
    sendTodoItem,
    deleteToDoItem,
  };

  return (
    <div className="margin-top">
      <h1 className="text-color text-align">To do App</h1>
      <ToDoContext.Provider value={contextValue}>
        <AddtoDo />
        <List />
      </ToDoContext.Provider>
    </div>
  );
};
