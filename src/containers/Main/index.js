import React, { createContext, useReducer } from "react";
import { AddtoDo } from "../../components/AddtoDo/index.js";
import { List } from "../List/index";
import { reducer } from "../../components/Reducer";
import {ADD_TO_LIST, DELETE_TO_DO_ITEM, ON_CHANGE_TO_DO_ITEM}from '../../components/Reducer/actionType'
export const ToDoContext = createContext({});

export const Main = () => {

  const [todoItemsList, dispatch] = useReducer(reducer, []);
  const sendTodoItem = (todo) => {
    dispatch({ type: ADD_TO_LIST, payload: todo });
  };

  const deleteToDoItem = (idOfItemToDelete) => {
    dispatch({ type: DELETE_TO_DO_ITEM, payload: idOfItemToDelete });
  };

  const onChangeToDoItem = (editedToDo, id) => {
    if (!editedToDo) {
      deleteToDoItem(id);
    } else {
      dispatch({ type: ON_CHANGE_TO_DO_ITEM, payload:{id, editedToDo} });
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
