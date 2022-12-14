import { useTodo } from "contexts/todo";
import _ from "lodash";
import NoData from "../components/NoData";
import TaskContent from "../components/TaskContent";
import DraggableList from "../components/TodoList";

export const ActiveTodos = () => {
  const { todoList, activeTodos } = useTodo();
  return (
    <DraggableList>
      {_.isEmpty(activeTodos()) ? (
        <NoData message="no data" />
      ) : (
        todoList.map((item, index) => (
          !item.status &&
          <TaskContent
            content={item.content}
            status={item.status}
            id={item.id}
            key={item.id}
            index={index}
          />
        ))
      )}
    </DraggableList>
  );
};

export const CompletesTodos = () => {
  const { todoList, completedTodos } = useTodo();
  return (
    <DraggableList>
      {_.isEmpty(completedTodos()) ? (
        <NoData message="no data" />
      ) : (
        todoList.map((item, index) => (
          item.status &&
          <TaskContent
            content={item.content}
            status={item.status}
            id={item.id}
            key={item.id}
            index={index}
          />
        ))
      )}
    </DraggableList>
  );
};

export const AllTodos = () => {
  const { todoList } = useTodo();
  return (
    <DraggableList>
      {_.isEmpty(todoList) ? (
        <NoData message="add new todo" />
      ) : (
        todoList.map((item, index) => (
          <TaskContent
            content={item.content}
            status={item.status}
            id={item.id}
            key={item.id}
            index={index}
          />
        ))
      )}
    </DraggableList>

  );
};
