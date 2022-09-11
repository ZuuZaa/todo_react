import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);
const todoListFromLocalStorage = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")).todoList : [];

const useTodo = () => {
    const [todoList, setTodoList] = useContext(TodoContext);

    const newTodo = (value) => {
        setTodoList([...todoList, value]);
    };

    const changeItemStatus = (id) => {
        const itemToChange = todoList.filter(item => item.id === id);
        itemToChange[0].status = !itemToChange[0].status;
        setTodoList([...todoList]);
    }

    const deleteItem = (id) => {
        const index = todoList.findIndex(item => item.id === id)
        todoList.splice(index, 1);
        setTodoList([...todoList]);
    }

    const clearCompleted = () => {
        setTodoList([...todoList.filter(item => !item.status)]);
    }

    const reorderList = (dragIndex, dragOverIndex) => {
        const copyListItems = [...todoList];
        const dragItemContent = copyListItems[dragIndex];
        copyListItems.splice(dragIndex, 1);
        copyListItems.splice(dragOverIndex, 0, dragItemContent);
        setTodoList([...copyListItems])
    }

    const leftItems = () => todoList.filter(item => !item.status).length;
    const activeTodos = () => todoList.filter(item => !item.status);
    const completedTodos = () => todoList.filter(item => item.status);

    return {
        todoList,
        newTodo,
        changeItemStatus,
        deleteItem,
        clearCompleted,
        reorderList,
        leftItems,
        activeTodos,
        completedTodos
    };
};

const TodoProvider = ({ children }) => {

    const [todoList, setTodoList] = useState(todoListFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify({ todoList }));
    }, [todoList]);

    return (
        <TodoContext.Provider value={[todoList, setTodoList]}>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoProvider, useTodo };

