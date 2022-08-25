import { useTodo } from "contexts/todo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const TodoInput = () => {

  const [todo, setTodo] = useState({});
  const { newTodo } = useTodo();
  const id = new Date().getTime();
  const navigate = useNavigate();

  const handleChange = () => (event) => {
    const data = {id, content: event.target.value, status: false};
    setTodo(data);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    newTodo(todo);
    e.target.reset();
    navigate("/");
  };

  return (
    <form className="todo-input" onSubmit={(e) => formSubmit(e)}>
      <input type="checkbox" className="checkbox" disabled />
      <input
        type="text"
        className="text-input"
        placeholder="Create a new todo..."
        onChange={handleChange()}
      />
    </form>
  );
};

export default TodoInput;
