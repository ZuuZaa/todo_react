import "./style.scss";

const TodoInput = () => {
    return(
        <form className="todo-input">
            <input type="checkbox" className="checkbox" disabled />
            <input type="text" className="text-input" placeholder="Create a new todo..."/>
        </form>
    )
}

export default TodoInput;