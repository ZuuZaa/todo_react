import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";
import "./style.scss";
import { useState } from "react";

const TaskContent = ({ content, status, id, index }) => {

  const [dragOverItem, setDragOverItem] = useState(null);

  const { changeItemStatus, deleteItem, reorderList } = useTodo();

  const dragStart = e => e.dataTransfer.setData("start", e.target.getAttribute("index"))

  const dragEnter = e => setDragOverItem(e.target.getAttribute("index"));

  const dragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const dragDrop = (e) => {
    e.preventDefault();
    reorderList(e.dataTransfer.getData("start"), dragOverItem);
    e.dataTransfer.clearData()
  };

  return (
    <li
      className="todo-task"
      key={id}
      index={index}
      draggable
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDrop={dragDrop}
    >
      <div className="border">
        <input
          type="checkbox"
          className="todo-check"
          checked={status}
          index={index}
          onChange={() => changeItemStatus(id)}
        />
        <img
          src={CheckIcon}
          className="check-icon"
          alt="check icon"
          onClick={() => changeItemStatus(id)}
          index={index}
        />
      </div>
      <div
        className="todo-content"
        index={index}
        onClick={() => changeItemStatus(id)}
      >
        {content}
      </div>
      <img
        src={CrossIcon}
        alt="cross icon"
        index={index}
        className="cross-icon"
        onClick={() => deleteItem(id)}
      />
    </li>
  );
};

export default TaskContent;
