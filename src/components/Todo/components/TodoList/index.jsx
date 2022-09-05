import { useTodo } from "contexts/todo";
import _ from "lodash";
import { useState } from "react";
import TaskContent from "../TaskContent";


export const DraggableList = ({data}) => {

    const { reorderList } = useTodo();
    const [dragItem, setDragItem] = useState(null);
    const [dragOverItem, setDragOverItem] = useState(null);
  
    const dragStart = (e) => setDragItem(e.target.getAttribute("index"));

    const dragEnter = (e) => setDragOverItem(e.target.getAttribute("index"));

    const dragOver = (e) => {
        let event = e;
        event.stopPropagation();
        event.preventDefault();
      };

    const dragDrop = (e) => {
      e.preventDefault();
      reorderList(dragItem, dragOverItem);
    };
  
    return (
      <ul className="todo-list">
        {data.map((item, index) => (
          <li
            className="todo-task"
            key={item.id}
            index={index}
            draggable
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDrop={dragDrop}
          > 
          <TaskContent
              content={item.content}
              status={item.status}
              id={item.id}
              key={item.id}
            />
          </li>
        ))}
      </ul>
    );
  };