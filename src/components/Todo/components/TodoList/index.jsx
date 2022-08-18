import { useTodo } from "contexts/todo";
import "./style.scss";

const TodoList = () => {

    const {todoList} = useTodo();
    console.log("todo", todoList)
    return(
        <div className="todo-list">
            <h1>todo list</h1>
            
        </div>
    )
};

export default TodoList;