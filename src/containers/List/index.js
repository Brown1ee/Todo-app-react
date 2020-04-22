import React, { useContext, useEffect, useState, useRef } from "react";
import { Row, Col } from "antd";
import ToDoList from "../../components/ToDoList/index.js";
import { ToDoContext } from "../Main";

export const List = () => {
  const { todoItemsList } = useContext(ToDoContext);
  const [numberOfTasks, setNumberOfTasks] = useState(0);
  const ref = useRef();

  useEffect(() => {
    setNumberOfTasks(todoItemsList.length);
  }, [todoItemsList]);

  return (
    <div>
      <Row justify="center">
        <Col md={12}>
          <h4 className="text-color text-align">
            For today you have {numberOfTasks}{" "}
            {numberOfTasks === 1 ? "task" : "task's"}
          </h4>
          <Row>
            {ref.current && (
              <Col md={1}>
                <div
                  style={{
                    height: ref.current.height(),
                    borderRight: "3px solid #d9d9d9",
                  }}
                ></div>
              </Col>
            )}
            <Col md={23}>
              <ToDoList ref={ref} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
