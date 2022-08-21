import { createContext, useContext, useState } from "react";

const TodoContext = createContext(null);
const todoListFromLocalStorage = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")).todoList : [];

const useTodo = () => {
    const [todoList, setTodoList] = useContext(TodoContext);

    const newTodo = (value) => {
        console.log("initial",todoListFromLocalStorage)
        setTodoList(todoList => [...todoList, value]);
        localStorage.setItem("todos", JSON.stringify({ todoList }));
    };

    const changeItemStatus = (index) => {
        todoList[index].status = !todoList[index].status;
        localStorage.setItem("todos", JSON.stringify({ todoList }));
    } 

    const deleteItem = (index) => {
        todoList.splice(index, 1);
        setTodoList([...todoList]);
        localStorage.setItem("todos", JSON.stringify({ todoList }));
    }

    return { todoList, newTodo, changeItemStatus, deleteItem };
};

const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(todoListFromLocalStorage);
    return (
        <TodoContext.Provider value={[todoList, setTodoList]}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoProvider, useTodo };

