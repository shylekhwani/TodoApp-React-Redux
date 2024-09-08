import { useDispatch } from "react-redux"
// import { RemoveTodoActionCreator } from "../../Redux/Action/ActionCreators"
import { removeTodo } from "../Slices (Redux-Toolkit)/todoSlice"

function Todoitem({id,text,iscompleted,}){
 
    const dispatch = useDispatch()

    function RemoveTodoitem(){
        dispatch(removeTodo(id))
    }

    return(
        <div className="">
         <input type="checkbox" checked={iscompleted} />
         <p> {text} </p>
         <button onClick={RemoveTodoitem}>X</button>
        </div>
    )
}

export default Todoitem