import Todoitem from "../TodoItems/TodoItem"
import { useSelector } from 'react-redux'

function Todolist(){

const todos = useSelector(state => state.todosState.todos); //using this hook we can access whole state.

return( 
    <div>
        {todos.map(todoitem => {
            return(
                <Todoitem key={todoitem.id} id={todoitem.id} text={todoitem.text} iscompleted={todoitem.completed} />
            )
        })}
    </div>
)
}

export default Todolist