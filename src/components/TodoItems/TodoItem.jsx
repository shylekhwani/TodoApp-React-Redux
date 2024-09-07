function Todoitem({text,iscompleted}){
    return(
        <div className="">
         <input type="checkbox" checked={iscompleted} />
         <p> {text} </p>
         <button>X</button>
        </div>
    )
}

export default Todoitem