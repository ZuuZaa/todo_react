import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import { Outlet } from "react-router-dom";
import { useTodo } from "contexts/todo";
import "./style.scss";


const Todo = () => {

  return (
    <div className="todo">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput />
        <Outlet />
        <TodoFooter />
      </div>
    </div>
  );
};

export default Todo;
