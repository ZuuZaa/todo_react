import "./style.scss";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import { Outlet } from "react-router-dom";


const Todo = () => {
  localStorage.clear()

  return (
    <div className="todo">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput />
        <Outlet />
        <TodoFooter/>
      </div>
    </div>
  );
};

export default Todo;
