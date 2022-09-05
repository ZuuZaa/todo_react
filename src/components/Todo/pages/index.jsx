import { useTodo } from "contexts/todo";
import _ from "lodash";
import NoData from "../components/NoData";
import { useState } from "react";
import TaskContent from "../components/TaskContent";
import { DraggableList, TodoList } from "../components/TodoList";

export const ActiveTodos = () => {

  const { activeTodos } = useTodo();
  return <DraggableList data={activeTodos()}/>;
}

export const CompletesTodos = () => {
  const { completedTodos } = useTodo();
  return (
    <ul className="todo-list">
      {_.isEmpty(completedTodos()) ? (
        <NoData />
      ) : (
        completedTodos().map((item) => (
          <TaskContent
            content={item.content}
            status={item.status}
            id={item.id}
          />
        ))
      )}
    </ul>
  );
};

export const AllTodos = () =>{
  
  const { todoList } = useTodo();
  return <DraggableList data={todoList}/>

} ;
