import React, { useContext } from "react";
import { Row, Col, Button, Typography } from "antd";
import { ToDoContext } from "../../containers/Main";
const { Paragraph } = Typography;

export const ToDoItem = ({ oneToDoItem, indexOfTodoInList }) => {
  const { onChangeToDoItem, deleteToDoItem } = useContext(ToDoContext);
  return (
    <Row justify="center">
      <Col md={20}>
        <Row justify="space-around">
          <Col md={20}>
            <div className="container-items-list">
              {oneToDoItem && (
                <ul className="circle-list-style">
                  <li>
                    <Paragraph
                      editable={{
                        onChange: (editedToDo) =>
                          onChangeToDoItem(editedToDo, indexOfTodoInList),
                      }}
                    >
                      {oneToDoItem}
                    </Paragraph>
                  </li>
                </ul>
              )}
            </div>
          </Col>
          <Col md={2}>
            <Button danger onClick={() => deleteToDoItem(indexOfTodoInList)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
