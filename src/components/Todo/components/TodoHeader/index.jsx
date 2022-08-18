import "./style.scss";
import SunIcon from "../../../../assets/icons/icon-sun.svg";
import MoonIcon from "../../../../assets/icons/icon-moon.svg";
import { useTheme } from "contexts/theme";

const TodoHeader = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className="todo-header">
            <h1>todo</h1>
            <img
                src={theme=== "light" ? SunIcon : MoonIcon}
                alt="toggle theme"
                onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
            />
        </div>
    )
};

export default TodoHeader;