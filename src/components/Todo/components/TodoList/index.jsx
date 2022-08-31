import "./style.scss";
import TodoTask from "components/Todo/components/TodoTask";
import _ from "lodash";
import NoData from "../NoData";

const TodoList = ({ data }) => {
  return (
    <div className="todo-list">
      {_.isEmpty(data) ? (
        <NoData />
      ) : (
        data.map((item, index) => (
          <TodoTask
            content={item.content}
            id={item.id}
            status={item.status}
            key={item.id}
            index={index}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
