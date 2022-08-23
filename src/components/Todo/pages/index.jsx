import TodoList from "components/Todo/components/TodoList";
import { useTodo } from "contexts/todo";


export const ActiveTodos = () => {
 
    const {activeTodos} = useTodo();
    return <TodoList data={activeTodos()} />
};

export const CompletesTodos = () => {
 
    const {completedTodos} = useTodo();
    return <TodoList data={completedTodos()} />
};

export const AllTodos = () => {
 
    const {todoList} = useTodo();
    return  <TodoList data={todoList} />
};