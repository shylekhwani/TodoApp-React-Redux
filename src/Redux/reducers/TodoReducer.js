import { Add_Todo, Remove_Todo, Toggle_Todo } from '../Constants/Constants'

// Initial state for the todos reducer
const initialstate = {
    todos: [] // Array to store the todo items
}

// Reducer function to manage the state of todos

export default function TodoReducer(state = initialstate, action) {

    // Check if the action type is Add_Todo
    if (action.type === Add_Todo) {
        return {
            ...state, // Spread the current state
            todos: [
                ...state.todos, // Spread all the existing todos
                { 
                    id: Date.now(), // Generate a unique id using the current timestamp
                    text: action.payload, // Use the payload (todo text) from the action
                    completed: false // New todos are not completed by default
                }
            ]
        }
    }
    
    // Check if the action type is Remove_Todo
    else if (action.type === Remove_Todo) {
        
        return {
            ...state, // Spread the current state
            todos: state.todos.filter(todo => todo.id !== action.payload) // Remove the todo with the matching id
        }
    }
    
    // Check if the action type is Toggle_Todo
    else if (action.type === Toggle_Todo) {
        return {
            ...state, // Spread the current state
            todos: state.todos.map(todo => { // Map over todos to toggle the completion status
                if (todo.id === action.payload) { // Find the todo with the matching id
                    return { 
                        ...todo, // Spread the existing todo properties
                        completed: !todo.completed // Toggle the completed status
                    }
                } else {
                    return todo // If no match, return the todo unchanged
                }
            })
        }
    }

    // Return the current state if no action type matches
    else {
        return state
    }
}
