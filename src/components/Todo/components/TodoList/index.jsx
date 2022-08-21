import { useTodo } from "contexts/todo";
import { useState } from "react";
import TodoTask from "../TodoTask";
import "./style.scss";

const TodoList = () => {

    const [checked, setChecked] = useState({});
    const { todoList } = useTodo();
    console.log("todos",todoList)

    return (
        <div className="todo-list">
            {todoList.map((item, index) => {
                return (
                    <TodoTask
                        content={item.content}
                        checked={checked}
                        setChecked={setChecked}
                        id={index}
                        key={index} />
                )
            }
            )}
        </div>
    )
};

export default TodoList;