import "./style.scss";
import { useTodo } from "contexts/todo";
import TodoTask from "components/Todo/components/TodoTask";
import _ from "lodash";
import NoData from "../components/NoData";

export const ActiveTodos = () => {
  const { todoList, activeTodos } = useTodo();

  return (
    <div className="todo-list">
      {_.isEmpty(activeTodos()) ? (
        <NoData />
      ) : (
        todoList.map(
          (item, index) =>
            !item.status && (
              <TodoTask
                content={item.content}
                id={item.id}
                status={item.status}
                key={item.id}
                index={index}
              />
            )
        )
      )}
    </div>
  );
};

export const CompletesTodos = () => {
  const { todoList, completedTodos } = useTodo();

  return (
    <div className="todo-list">
      {_.isEmpty(completedTodos()) ? (
        <NoData />
      ) : (
        todoList.map(
          (item, index) =>
            item.status && (
              <TodoTask
                content={item.content}
                id={item.id}
                status={item.status}
                key={item.id}
                index={index}
              />
            )
        )
      )}
    </div>
  );
};

export const AllTodos = () => {
  const { todoList } = useTodo();
  return (
    <div className="todo-list">
      {todoList.map((item, index) => (
        <TodoTask
          content={item.content}
          id={item.id}
          status={item.status}
          key={item.id}
          index={index}
        />
      ))}
    </div>
  );
};
