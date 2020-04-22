import React, { useContext, useState, useRef } from "react";
import { Row, Col, Button } from "antd";
import { ToDoContext } from "../../containers/Main";
import { EditOutlined } from "@ant-design/icons";
import { useGetColor } from "../CustomHooks";

export const ToDoItem = ({ oneToDoItem, idOfTodoInList }) => {
  const { onChangeToDoItem, deleteToDoItem } = useContext(ToDoContext);

  const [displayInput, setDisplayInput] = useState({
    display: "none",
  });

  const [displayParagraph, setDisplayPharagraph] = useState({
    display: "block",
  });

  const inputRef = useRef();

  const editable = () => {
    setDisplayPharagraph(displayInput);
    setDisplayInput(displayParagraph);
    setTimeout(() => {
      inputRef.current.focus();
    }, 50);
  };

  const handleBlur = () => {
    setDisplayPharagraph(displayInput);
    setDisplayInput(displayParagraph);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memorizedColor = useGetColor([idOfTodoInList]);

  return (
    <li style={{ color: `${memorizedColor}` }}>
      <Row justify="center">
        <Col md={20}>
          <Row justify="center">
            <Col md={23}>
              <input
                autoFocus={true}
                ref={inputRef}
                style={{ marginBottom: "0.5rem", ...displayInput }}
                value={oneToDoItem}
                onChange={(e) =>
                  onChangeToDoItem(e.target.value, idOfTodoInList)
                }
                onBlur={handleBlur}
              />
              <p style={displayParagraph}>{oneToDoItem}</p>
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
