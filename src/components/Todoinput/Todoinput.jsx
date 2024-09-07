import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddTodoActionCreator } from "../../Redux/Action/ActionCreators"

function Todoinput(){

    const [todo,setTodo] = useState('')

    const dispatch = useDispatch()// This dispatch is already connected to store

    function addTodoToStore(){ 
        dispatch(AddTodoActionCreator(todo))
        setTodo('')
    }

    return(
        <div> 
            <input type="text" onChange={e => setTodo(e.target.value) } value={todo}/>
            <button onClick={addTodoToStore}>Add Todo</button>
        </div>
    )
}

export default Todoinput