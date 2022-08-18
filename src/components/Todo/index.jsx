import "./style.scss";
import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { useTodo } from "contexts/todo";

const Todo = () => {

  const {todoList} = useTodo();
  console.log("todo", todoList)

  return (
    <div className="todo">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </div>
    </div>
  );
};

export default Todo;
