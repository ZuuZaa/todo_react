import TodoTask from "components/Todo/components/TodoTask";

const TodoList = ({data}) => {

    return (
        <div className="todo-list">
            {data.map((item) => <TodoTask content={item.content} id={item.id} status={item.status} key={item.id}/>)}
        </div>
    )
};

export default TodoList;