import React, {
  useContext,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import { ToDoContext } from "../../containers/Main/index.js";
import { ToDoItem } from "../ToDoItem";
import { Row, Col } from "antd";

const ToDoList = (props, ref) => {
  const { todoItemsList } = useContext(ToDoContext);

  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    height: () => inputRef.current.clientHeight,
  }));

  return (
    <div ref={inputRef} className="margin-top-list text-color align-center">
      <Row justify="center">
        <Col md={22}>
          <ul className="circle-list-style">
            {todoItemsList.map((oneToDoItem) => {
              return (
                <ToDoItem
                  key={oneToDoItem.id}
                  oneToDoItem={oneToDoItem.todo}
                  idOfTodoInList={oneToDoItem.id}
                />
              );
            })}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default forwardRef(ToDoList);
