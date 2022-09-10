import "./style.scss";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import { Outlet } from "react-router-dom";
import _ from "lodash";
import { useTodo } from "contexts/todo";
import { useLocation } from 'react-router-dom'


const Todo = () => {
  const { todoList } = useTodo();
  const location = useLocation();
  console.log(location.pathname);

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
