import React, { useContext, useMemo, useState } from "react";
import { Row, Col, Button } from "antd";
import { ToDoContext } from "../../containers/Main";
import { EditOutlined } from "@ant-design/icons";
import { useGetColor } from "../CustomHooks";

export const ToDoItem = ({ oneToDoItem, idOfTodoInList }) => {
  const { onChangeToDoItem, deleteToDoItem } = useContext(ToDoContext);

  const [edit, setEdit] = useState(false);

  const editable = () => {
    setEdit(!edit);
  };

  const handleBlur = () => {
    setEdit(false);
  };
  const color = useGetColor();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memorizedColor = useMemo(() => color, [idOfTodoInList]);

  return (
    <li style={{ color: `${memorizedColor}` }}>
      <Row justify="center">
        <Col md={20}>
          <Row justify="center">
            <Col md={23}>
              {edit ? (
                <input
                  style={{ marginBottom: "0.5rem" }}
                  value={oneToDoItem}
                  onChange={(e) =>
                    onChangeToDoItem(e.target.value, idOfTodoInList)
                  }
                  onBlur={handleBlur}
                />
              ) : (
                <p>{oneToDoItem}</p>
              )}
            </Col>
            <Col md={1}>
              <EditOutlined onClick={editable} />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Button danger onClick={() => deleteToDoItem(idOfTodoInList)} block>
            Delete
          </Button>
        </Col>
      </Row>
    </li>
  );
};
