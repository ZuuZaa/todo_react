import TodoTask from "components/Todo/components/TodoTask";


const TodoList = ({data}) => {
 
    console.log("list",data)
    
    return (
        <div className="todo-list">
            {data.map((item, index) => <TodoTask content={item.content} id={index} key={index} data={data}/>)}
        </div>
    )
};

export default TodoList;