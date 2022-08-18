import { useTodo } from "contexts/todo";
import TodoTask from "../TodoTask";
import "./style.scss";

const TodoList = () => {

    const {todoList} = useTodo();
    console.log("todo", todoList)
    return(
        <div className="todo-list">
            {todoList.map( item => <TodoTask value={item}/>)}
        </div>
    )
};

export default TodoList;