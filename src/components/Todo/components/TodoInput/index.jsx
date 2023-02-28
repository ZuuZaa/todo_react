import { useTodo } from "contexts/todo";
import { nanoid } from "nanoid";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const TodoInput = () => {

  const id = nanoid();
  const navigate = useNavigate();
  const textInput = useRef()
  const { newTodo } = useTodo();

  const formSubmit = (e) => {
    e.preventDefault();
    const content = textInput.current.value.trim()
    console.log(content)
    if (content) {
      newTodo({ id, content });
      e.target.reset();
      navigate("/");
    }
  };

  return (
    <form className="todo-input" onSubmit={(e) => formSubmit(e)}>
      <input type="checkbox" className="checkbox" disabled />
      <input
        type="text"
        ref={textInput}
        className="text-input"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoInput;
