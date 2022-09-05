import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";
import "./style.scss";

const TaskContent = ({ content, status, id, index }) => {
  const { changeItemStatus, deleteItem } = useTodo();

  return (
    <>
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
    </>
  );
};

export default TaskContent;