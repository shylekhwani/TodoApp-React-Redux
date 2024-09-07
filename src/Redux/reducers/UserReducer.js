import { Add_User } from '../Constants/Constants'

const initialstate = {
    users : []
}

export default function UserReducer(state = initialstate, action){ 

    if(action.type === Add_User){
        return {

            ...state,

            users : [ ...state.users,
                      action.payload
            ]
        }
    } 
    
    else {
        return state
    }
}