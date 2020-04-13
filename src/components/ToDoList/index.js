import React, { useContext } from "react";
import { ToDoContext } from "../../containers/Main/index.js";
import { ToDoItem } from "../ToDoItem";

export const ToDoList = () => {
  const { todoItemsList } = useContext(ToDoContext);
  return (
    <div className="margin-top-row text-color">
      {todoItemsList.map((oneToDoItem) => {
        return (
          <ToDoItem
            oneToDoItem={oneToDoItem.todo}
            idOfTodoInList={oneToDoItem.id}
            key={oneToDoItem.id}
          />
        );
      })}
    </div>
  );
};
