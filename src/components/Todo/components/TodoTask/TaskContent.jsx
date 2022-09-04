import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";

const TaskContent = ({ content, status, id }) => {
  const { changeItemStatus, deleteItem } = useTodo();

  return (
    <>
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
    </>
  );
};

export default TaskContent;