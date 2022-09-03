import "./style.scss";
import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";
import { useRef, useState } from "react";

const TodoTask = ({ content, status, id, index }) => {

  const { todoList, changeItemStatus, deleteItem } = useTodo()

  return (
    <li
      className={status ? "checked todo-task" : "todo-task"}
      id={id}
      index={index}
      key={id}
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
        className="cross-icon"
        onClick={() => deleteItem(id)}
      />
    </li>
  )
}

export default TodoTask;
