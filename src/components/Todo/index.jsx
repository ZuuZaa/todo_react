import "./style.scss";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import { Outlet } from "react-router-dom";
import _ from "lodash";
import { useTodo } from "contexts/todo";


const Todo = () => {
  const { todoList } = useTodo();

  return (
    <div className="todo">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput />
          {!_.isEmpty(todoList) && <Outlet />}
        {!_.isEmpty(todoList) && <TodoFooter />}
      </div>
    </div>
  );
};

export default Todo;
