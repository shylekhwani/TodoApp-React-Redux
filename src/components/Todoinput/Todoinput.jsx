import { useState } from "react"
import { useDispatch } from "react-redux"
// import { AddTodoActionCreator } from "../../Redux/Action/ActionCreators"
import { addTodo } from "../Slices (Redux-Toolkit)/todoSlice"

function Todoinput(){

    const [todo,setTodo] = useState('')

    const dispatch = useDispatch()// This dispatch is already connected to store

    function addTodoToStore(){ 
        dispatch(addTodo(todo))
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