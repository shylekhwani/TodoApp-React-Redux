import { useDispatch } from "react-redux"
import { RemoveTodoActionCreator } from "../../Redux/Action/ActionCreators"

function Todoitem({id,text,iscompleted,}){
 
    const dispatch = useDispatch()

    function removeTodo(){
        dispatch(RemoveTodoActionCreator(id))
    }

    return(
        <div className="">
         <input type="checkbox" checked={iscompleted} />
         <p> {text} </p>
         <button onClick={removeTodo}>X</button>
        </div>
    )
}

export default Todoitem