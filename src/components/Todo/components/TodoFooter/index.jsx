import { useTodo } from "contexts/todo";
import "./style.scss";

const TodoFooter = () => {

    const { filteredTodos } = useTodo();
    const left = filteredTodos().leftItems;

    return(
        <div className="todo-footer">
            <div className="mobile-footer">
                <div className="top-container">
                    <div className="items-left">
                        <span className="left">{left}</span>
                        <span>items left</span>
                    </div>
                    <div className="clear-completed">
                        clear completed
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="all footer-link active" >all</div>
                    <div className="active-task footer-link" >active</div>
                    <div className="completed footer-link" >completed</div>
                </div>
            </div>
            <div className="desktop-footer"></div>
        </div>
    )
};

export default TodoFooter;