import TodoList from "components/Todo/components/TodoList";
import { useTodo } from "contexts/todo";
import TodoTask from "components/Todo/components/TodoTask";
import _ from "lodash";
import { useRef } from "react";
import NoData from "../components/NoData";

export const ActiveTodos = () => {
  const { activeTodos } = useTodo();
  return <TodoList data={activeTodos()} />;
};

export const CompletesTodos = () => {
  const { completedTodos } = useTodo();
  return <TodoList data={completedTodos()} />;
};

// export const AllTodos = () => {

//     const {todoList} = useTodo();
//     return  <TodoList data={todoList} />
// };

export const AllTodos = () => {
  const { todoList } = useTodo();

//   const dragItem = useRef();
//   const dragOverItem = useRef();

//   const dragStart = (e, position) => {
//     dragItem.current = position;
//     console.log("start", dragItem);
//   };

//   const dragEnter = (e, position) => {
//     dragOverItem.current = position;
//     console.log("enter", dragOverItem);
//   };

//   const drop = (e) => {
//     const copyListItems = [...todoList];
//     const dragItemContent = copyListItems[dragItem.current];
//     copyListItems.splice(dragItem.current, 1);
//     copyListItems.splice(dragOverItem.current, 0, dragItemContent);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     console.log("item", todoList);
//     console.log("new list", copyListItems);
//     // setList(copyListItems);
//   };

  
  return (
    <div className="todo-list">
      {_.isEmpty(todoList) ? (
        <NoData />
      ) : (
        todoList.map((item, index) => (
          <TodoTask
            content={item.content}
            id={item.id}
            status={item.status}
            key={item.id}
            index={index}
            // draggable
            // onDragStart={(e) => dragStart(e, index)}
            // onDragEnter={(e) => dragEnter(e, index)}
            // onDragEnd={(e) => drop(e)}
          />
        ))
      )}
    </div>
  );
};

//   return todoList.map((item, index) => (
//     <div
//       className="todo-task"
//       onDragStart={(e) => dragStart(e, index)}
//       onDragEnter={(e) => dragEnter(e, index)}
//       onDragEnd={(e)=> drop(e)}
//       key={item.id}
//       draggable
//     >
//       {item.content}
//     </div>
//   ));
// };

// const handleDrop = (droppedItem) => {
//     // Ignore drop outside droppable container
//     if (!droppedItem.destination) return;
//     var updatedList = [...itemList];
//     // Remove dragged item
//     const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
//     // Add dropped item
//     updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
//     // Update State
//     setItemList(updatedList);
//   };
