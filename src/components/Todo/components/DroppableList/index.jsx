import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DroppableList = ({children}) => {
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