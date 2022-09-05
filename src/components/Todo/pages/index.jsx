import { useTodo } from "contexts/todo";
import _ from "lodash";
import NoData from "../components/NoData";
import { DraggableTask, TodoTask } from "../components/TodoTask";
import DroppableList from "../components/DroppableList";
import { useState } from "react";

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

  const { reorderList, changeItemStatus, deleteItem } = useTodo();
  const [dragItem, setDragItem] = useState(null);
  const [dragOverItem, setDragOverItem] = useState(null);


    const dragStart = (e) => {
    setDragItem(e.target.getAttribute("index"));
    console.log("start", dragItem);
  };
  const dragEnter = (e) => {
    setDragOverItem(e.target.getAttribute("index"));
    console.log("end", dragOverItem);
  };
  const dragDrop = (e) => {
    e.preventDefault();
    console.log("drop", dragItem,dragOverItem)
    reorderList(dragItem,dragOverItem);
  }
  const dragOver = (e) => {
    let event = e;
    event.stopPropagation();
    event.preventDefault();
    }

  return(
    <>
    {todoList.map((item, index) => <div 
    key={item.id} 
    index={index}
    draggable
    onDragStart={dragStart}
    onDragOver={dragOver}
    onDragEnter={dragEnter}
    onDrop={dragDrop}
    >{item.content}</div>)}
    </>
  )
}

