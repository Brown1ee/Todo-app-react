import React, { createContext, useState } from "react";
import { AddToDo } from "../../components/AddToDo/index.js";
import { List } from "../List/index";
export const ToDoContext = createContext({});

export const Main = () => {
  const [todoItemsList, setToDoItem] = useState([]);

  const sendTodoItem = (todo) => {
    setToDoItem([...todoItemsList, todo]);
  };

  const deleteToDoItem = (idOfItemToDelete) => {
    setToDoItem(todoItemsList.filter((item) => item.id !== idOfItemToDelete));
  };

  const onChangeToDoItem = (editedToDo, id) => {
    if (!editedToDo) {
      deleteToDoItem(id);
    } else {
      let todoList = [...todoItemsList];
      todoList[todoList.findIndex((elem) => elem.id === id)].todo = editedToDo;
      setToDoItem(todoList);
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
      <h1 className="text-color">To Do App</h1>
      <ToDoContext.Provider value={contextValue}>
        <AddToDo />
        <List />
      </ToDoContext.Provider>
    </div>
  );
};
