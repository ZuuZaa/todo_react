import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

const useTodo = () => {
    const [todoList, setTodoList] = useContext(TodoContext);
    
    const newTodo = (value) => {
        setTodoList( todoList => [...todoList, value]);
        localStorage.setItem("todos", JSON.stringify({todoList}) );
        // const local = JSON.parse(localStorage.getItem("todos"));
    };
    return { todoList, newTodo };
};

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([]);
    return (
        <TodoContext.Provider value={[todoList, setTodoList]}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoProvider, useTodo };

