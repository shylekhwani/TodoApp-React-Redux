import { Add_Todo, Remove_Todo, Toggle_Todo, Add_User } from '../Constants/Constants'

// function that return an Action Object are called action creators.

// Instead of doing this manually => dispatch({ type:'ADD' , payload: 17 }), we cretate Action-Creators

export function AddTodoActionCreator(todo){
    return{
        type : Add_Todo,
        payload : todo
    }
    
};

export function RemoveTodoActionCreator(todoId){
    return{
        type : Remove_Todo,
        payload : todoId
    }
    
};

export function ToggleTodoActionCreator(todoId){ // Mark Todo as completed 
    return{
        type : Toggle_Todo,
        payload : todoId
    }
    
};

export function AddUserActionCreator(user){
    return{
        type : Add_User,
        payload : user
    }
};