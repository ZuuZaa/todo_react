import TodoList from "components/Todo/components/TodoList";
import { useTodo } from "contexts/todo";


export const CompletesTodos = () => {
 
    const {completedTodos} = useTodo();
    return <TodoList data={completedTodos()} />
};