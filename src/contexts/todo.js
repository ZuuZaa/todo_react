import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);

const useTheme = () => {
    const [todoList, setTodoList] = useContext(TodoContext);
    const newTodo = (value) => {
        setTodoList(value);
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

export { TodoProvider, useTheme };

