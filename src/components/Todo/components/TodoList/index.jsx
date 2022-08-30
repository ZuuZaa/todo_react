import "./style.scss";
import TodoTask from "components/Todo/components/TodoTask";
import _ from "lodash";
import NoData from "../NoData";

const TodoList = ({data}) => {

    console.log(_.isEmpty(data))
    return (
        <div className="todo-list">
            {_.isEmpty(data) ? <NoData/> :data.map((item) => <TodoTask content={item.content} id={item.id} status={item.status} key={item.id}/>)}
        </div>
    )
};

export default TodoList;