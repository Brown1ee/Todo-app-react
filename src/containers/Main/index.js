import React, { createContext, useState } from "react";
import { AddToDo } from "../../components/AddToDo/index.js";
import { List } from "../List/index";
export const ToDoContext = createContext({});

export const Main = () => {
  const [todoItemsList, setToDoItem] = useState([]);

  const sendTodoItem = (todo) => {
    todo && setToDoItem([...todoItemsList, todo]);
  };

  const deleteToDoItem = (indexOfItemToDelete) => {
    setToDoItem(
      todoItemsList.filter(
        (item, indexOfTodo) => indexOfTodo !== indexOfItemToDelete
      )
    );
  };
  const onChangeToDoItem = (editedToDo, index) => {
    if (!editedToDo) {
      deleteToDoItem(index);
    } else {
      let todoList = [...todoItemsList];
      todoList[index] = editedToDo;
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
