import React, { useState, useContext, useRef } from "react";
import { Input, Button, Row, Col } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ToDoContext } from "../../containers/Main";

export const AddtoDo = () => {
  const [todo, setTodo] = useState("");
  const { sendTodoItem } = useContext(ToDoContext);

  const addTaskInputRef = useRef();
  const addButtonRef = useRef();

  const handleAddToDo = ()=>{
    todo && sendTodoItem({ todo, id: Date.now() });
    setTodo("");
    addTaskInputRef.current.focus();
  }

  const handleKeyDown = (e)=>{
    if (e.keyCode === 13) {
      addButtonRef.current.handleClick();
    }
  }

  return (
    <Row justify="center" className="margin-top-row">
      <Col md={12}>
        <Row justify="center">
          <Col md={20}>
            <Input
              placeholder="I want to..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              ref={addTaskInputRef}
              onKeyDown={(e) => handleKeyDown(e)}
            />
          </Col>
          <Col md={2}>
            <Button
              ref={addButtonRef}
              onClick={handleAddToDo}
              block
            >
              <PlusCircleOutlined />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};