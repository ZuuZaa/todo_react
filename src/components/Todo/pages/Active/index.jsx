import TodoList from "components/Todo/components/TodoList";
import { useTodo } from "contexts/todo";



export const ActiveTodos = () => {
 
    const {activeTodos} = useTodo();
    return <TodoList data={activeTodos()} />
};