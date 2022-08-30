import { useTodo } from "contexts/todo";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./style.scss";

const TodoFooter = () => {
  const { leftItems, clearCompleted, completedTodos } = useTodo();
  const navigate = useNavigate();
  console.log(completedTodos.length)

  const footerLinks = [
    { name: "all", path: "/" },
    { name: "active", path: "/active" },
    { name: "completed", path: "/completed" },
  ];

  const clickHandler = () => {
    clearCompleted();
    navigate("/");
  };

  return (
    <div className="todo-footer">
      <div className="mobile-footer">
        <div className="top-container">
          <div className="items-left">
            <span className="left">{leftItems()}</span>
            <span>items left</span>
          </div>
          <div className="clear-completed" onClick={clickHandler}>
            clear completed
          </div>
        </div>
        <div className="bottom-container">
          <ul>
            {footerLinks.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "active" : "footer-link"
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="desktop-footer"></div>
    </div>
  );
};

export default TodoFooter;
