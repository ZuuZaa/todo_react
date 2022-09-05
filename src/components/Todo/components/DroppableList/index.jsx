import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DroppableList = ({children}) => {

  //   const dragEnd = result => {
  //     console.log(result)
  //     if (!result.destination) {
  //       return;
  //   }
  // }

    return (
        <DragDropContext>
        <Droppable droppableId="to-dos">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="todo-list">
                {children}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    )
}
export default DroppableList;