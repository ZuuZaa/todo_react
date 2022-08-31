import "./style.scss";
import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";
import { useState } from "react";

const TodoTask = ({ content, status, id, index }) => {

  const { reorderList, changeItemStatus, deleteItem } = useTodo();
  const [dragItem, setDragItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);

  const dragStart = (e) => {
    setDragItem(e.target.getAttribute("index"));
    console.log("start", dragItem);
  };

  const dragEnter = (e) => {
    setDragOverItem(e.target.getAttribute("index"));
    console.log("enter", dragOverItem);
  };

  const drop = (e,dragItem, dragOverItem) => {
    console.log("index", dragItem, dragOverItem, e)
    reorderList(dragItem, dragOverItem)
    // const copyListItems = [...todoList];
    // const dragItemContent = copyListItems[dragItem.current];
    // copyListItems.splice(dragItem.current, 1);
    // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    // dragItem.current = null;
    // dragOverItem.current = null;
    // console.log("item", todoList);
    // console.log("new list", copyListItems);
    // setList(copyListItems);
  };



  return (
    <div
      className={status ? "checked todo-task" : "todo-task"}
      id={id}
      index={index}
      draggable
      onDragStart={(e) => dragStart(e)}
      onDragEnter={(e) => dragEnter(e)}
      onDragEnd={(e) => drop(e,dragItem, dragOverItem)}
    >
      <div className="border">
        <input
          type="checkbox"
          className="todo-check"
          checked={status}
          onChange={() => changeItemStatus(id)}
        />
        <img
          src={CheckIcon}
          className="check-icon"
          alt="check icon"
          onClick={() => changeItemStatus(id)}
        />
      </div>
      <div className="todo-content" onClick={() => changeItemStatus(id)}>
        {content}
      </div>
      <img
        src={CrossIcon}
        alt="cross icon"
        className="cross-icon"
        onClick={() => deleteItem(id)}
      />
    </div>
  );
};

export default TodoTask;
