import "./style.scss";

const TodoTask = ({content, id}) => {
    return(
        <div className="todo-task" id={id}>
            <h1>{content}</h1>
            
        </div>
    )
};

export default TodoTask;