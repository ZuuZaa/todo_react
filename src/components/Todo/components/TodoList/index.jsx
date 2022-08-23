import TodoTask from "components/Todo/components/TodoTask";

const TodoList = ({data}) => {

    return (
        <div className="todo-list">
            {data.map((item) => <TodoTask content={item.content} id={item.id} key={item.id} data={data}/>)}
        </div>
    )
};

export default TodoList;