import "./style.scss";
import CheckIcon from "../../../../assets/icons/icon-check.svg";
import CrossIcon from "../../../../assets/icons/icon-cross.svg";
import { useTodo } from "contexts/todo";
import {useState} from "react";

const TodoTask = ({ content, id}) => {
  const { todoList } = useTodo();
  const [checked, setChecked] = useState(false);
  const { changeItemStatus, deleteItem } = useTodo();
  console.log("todo", todoList)

  const toggleCheckbox = () => {
    setChecked(!checked)
    changeItemStatus(id);
  }

  const deleteTask = (e) => {
    deleteItem(e.target.parentElement.id);
  };

  return (
    <div className= {todoList[id].status ? "checked todo-task" :"todo-task"} id={id}  >
      <div className="border">
        <input type="checkbox" className="todo-check" checked={todoList[id].status} onChange={()=> toggleCheckbox()}/>
        <img src={CheckIcon} className="check-icon" alt="check icon" onClick={()=> toggleCheckbox()}/>
      </div>
      <div className="todo-content" onClick={()=>toggleCheckbox()}>{content}</div>
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
