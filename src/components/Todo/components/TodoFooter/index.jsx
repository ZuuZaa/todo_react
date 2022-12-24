import { useTodo } from "contexts/todo";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

const TodoFooter = () => {
  const { leftItems, clearCompleted } = useTodo();

  const footerLinks = [
    { name: "all", path: "/" },
    { name: "active", path: "/active" },
    { name: "completed", path: "/completed" },
  ];

  const clickHandler = () => {
    clearCompleted();
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
      <div className="desktop-footer">
        <div className="items-left">
          <span className="left">{leftItems()}</span>
          <span>items left</span>
        </div>
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
        <div className="clear-completed" onClick={clickHandler}>
          clear completed
        </div>
      </div>
      <div className="reorder">
        <p>Drag and drop to reorder list</p>
        <p>
        Challenge by <Link to="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link>.
        Coded by <Link to="https://zumrudsportfolio.netlify.app/">Zumrud Nerman</Link>.
        </p>
        </div>
    </div>
  );
};

export default TodoFooter;
