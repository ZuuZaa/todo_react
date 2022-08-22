import TodoList from "components/Todo/components/TodoList";
import { useTodo } from "contexts/todo";



export const AllTodos = () => {
 
    const {todoList} = useTodo();
    return  <TodoList data={todoList} />
};

