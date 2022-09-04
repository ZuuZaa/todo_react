import "./style.scss";
import { Draggable } from "react-beautiful-dnd";
import TaskContent from "./TaskContent";

export const DraggableTask = ({ content, status, id, index }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          key={id}
          className={status ? "checked todo-task" : "todo-task"}
        >
         <TaskContent content={content} status={status} id={id} />
        </li>
      )}
    </Draggable>
  );
};


export const TodoTask = ({ content, status, id}) => {
  return (
    <li
    key={id}
    className="checked todo-task" 
  >
   <TaskContent content={content} status={status} id={id} />
  </li>
  )
}