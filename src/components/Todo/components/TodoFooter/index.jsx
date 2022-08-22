import { useTodo } from "contexts/todo";
import { Link } from "react-router-dom";
import "./style.scss";

const TodoFooter = () => {
    const { filteredTodos } = useTodo();
    const left = filteredTodos().leftItems;

    return (
        <div className="todo-footer">
            <div className="mobile-footer">
                <div className="top-container">
                    <div className="items-left">
                        <span className="left">{left}</span>
                        <span>items left</span>
                    </div>
                    <div className="clear-completed">clear completed</div>
                </div>
                <div className="bottom-container">
                    <ul>
                        <li>
                            <Link to="/" className="all footer-link active">
                                all
                            </Link>
                        </li>
                        <li>
                            <Link to="/active" className="active-task footer-link">
                                active
                            </Link>
                        </li>
                        <li>
                            <Link to="/completed" className="completed footer-link">
                                completed
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="desktop-footer"></div>
        </div>
    );
};

export default TodoFooter;
