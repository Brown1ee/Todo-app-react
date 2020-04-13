import React, { useContext } from "react";
import { ToDoContext } from "../../containers/Main/index.js";
import { ToDoItem } from "../ToDoItem";

export const ToDoList = () => {
  const { todoItemsList } = useContext(ToDoContext);
  return (
    <div className="margin-top-row text-color">
      {Array.isArray(todoItemsList)
        ? todoItemsList.map((oneToDoItem, indexOfTodoInList) => {
            return (
              <ToDoItem
                oneToDoItem={oneToDoItem}
                indexOfTodoInList={indexOfTodoInList}
                key={indexOfTodoInList}
              />
            );
          })
        : todoItemsList}
    </div>
  );
};
