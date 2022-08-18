import { useTodo } from "contexts/todo";
import TodoTask from "../TodoTask";
import "./style.scss";

const TodoList = () => {

    const {todoList} = useTodo();
    console.log("todo", todoList)
    return(
        <div className="todo-list">
            {todoList.map((item, index) => <TodoTask content={item.content} id={index} key={index}/>)}
        </div>
    )
};

export default TodoList;