import { useTodo } from "contexts/todo";
import _ from "lodash";
import NoData from "../components/NoData";
import { DraggableTask, TodoTask } from "../components/TodoTask";
import DroppableList from "../components/DroppableList";

export const ActiveTodos = () => {
  const { todoList, activeTodos } = useTodo();

  return (
    <DroppableList>
      {_.isEmpty(activeTodos()) ? (
        <NoData />
      ) : (
        todoList.map((item, index) => (
          <>
            {!item.status && (
              <DraggableTask
                content={item.content}
                id={item.id}
                status={item.status}
                key={item.id}
                index={index}
              />
            )}
          </>
        ))
      )}
    </DroppableList>
  );
};

export const CompletesTodos = () => {
  const { completedTodos } = useTodo();
  return (
    <ul className="todo-list">
      {_.isEmpty(completedTodos()) ? (
        <NoData />
      ) : (
        completedTodos().map((item) => (
          <TodoTask
            content={item.content}
            id={item.id}
            status={item.status}
            key={item.id}
          />
        ))
      )}
    </ul>
  );
};

export const AllTodos = () => {
  const { todoList } = useTodo();

  return (
    <DroppableList>
      {todoList.map((item, index) => (
        <DraggableTask
          content={item.content}
          id={item.id}
          status={item.status}
          key={item.id}
          index={index}
        />
      ))}
    </DroppableList>
  );
};
