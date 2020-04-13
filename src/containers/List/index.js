import React, { useContext } from "react";
import { Row, Col } from "antd";
import { ToDoList } from "../../components/ToDoList/index.js";
import { ToDoContext } from "../Main";
export const List = () => {
  const { todoItemsList } = useContext(ToDoContext);

  return (
    <div>
      <Row justify="center">
        <Col md={12}>
          <h4 className="text-color">
            For today you have {todoItemsList.length}{" "}
            {todoItemsList.length === 1 ? "task" : "task's"}
          </h4>

          <ToDoList />
        </Col>
      </Row>
    </div>
  );
};
