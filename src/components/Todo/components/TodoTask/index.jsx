import "./style.scss";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";

const TodoTask = ({ content, id }) => {
  return (
    <div className="todo-task" id={id}>
      <div className="border">
        <input type="checkbox" className="todo-check" />
      </div>
      <div>{content}</div>
      <img src={CrossIcon} alt="cross icon" className="cross-icon" />
    </div>
  );
};

export default TodoTask;
