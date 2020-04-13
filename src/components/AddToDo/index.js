import React, { useState, useContext } from "react";
import { Input, Button, Row, Col } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ToDoContext } from "../../containers/Main";
export const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { sendTodoItem } = useContext(ToDoContext);

  return (
    <Row justify="center" className="margin-top-row">
      <Col md={12}>
        <Row justify="center">
          <Col md={20}>
            <Input
              placeholder="I want to..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button
              onClick={() => {
                sendTodoItem(todo);
                setTodo("");
              }}
            >
              <PlusCircleOutlined />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
