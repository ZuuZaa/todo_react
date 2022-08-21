import "./style.scss";
import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";
import { useRef} from "react";

const TodoTask = ({ content, checked, setChecked, id}) => {
  const checkbox = useRef();
  const { todoList } = useTodo();
  console.log(todoList)

  const { changeItemStatus, deleteItem } = useTodo();

  const taskClickHandler = (id) => {
    changeItemStatus(id);
    setChecked(old => ({ ...old, [id]: !old[id] }));
    console.log("checked",checked)

  } 

  const deleteTask = (e) => {
    e.stopPropagation();
    deleteItem(e.target.parentElement.id);
  };

  return (
    <div className= {todoList[id].status ? "checked todo-task" :"todo-task"} id={id} onClick={(e) => taskClickHandler(e.target.id) }  >
      <div className="border">
        <div className="todo-check"/>
        <img src={CheckIcon} className="check-icon" alt="check icon"  />
      </div>
      <div>{content}</div>
      <img
        src={CrossIcon}
        alt="cross icon"
        className="cross-icon"
        onClick={(e) => deleteTask(e)}
      />
    </div>
  );
};

export default TodoTask;
