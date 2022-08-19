import "./style.scss";
import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";

const TodoTask = ({ content, id }) => {
  const { changeItemStatus } = useTodo();

  const checkedTask = (e) => {
    changeItemStatus(e.target.id);
  };

  return (
    <div className="todo-task" id={id} onClick={(e) => checkedTask(e)}>
      <div className="border">
        <input type="checkbox" className="todo-check" />
        <img src={CheckIcon} className="check-icon" />
      </div>
      <div>{content}</div>
      <img src={CrossIcon} alt="cross icon" className="cross-icon" />
    </div>
  );
};

export default TodoTask;
