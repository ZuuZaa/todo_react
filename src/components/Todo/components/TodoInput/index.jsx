import { useTodo } from "contexts/todo";
import { useState } from "react";
import "./style.scss";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const { newTodo } = useTodo();

  const handleChange = () => (event) => {
    setTodo(event.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: new Date().getTime(),
      content: todo,
      status: "pending",
    };
    newTodo(data);
    e.target.reset();
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
