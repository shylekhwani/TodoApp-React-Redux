import { createSlice } from "@reduxjs/toolkit";

const todoSliceReducer = createSlice({
    name : 'Todos', // name of the slice

    initialState : [], // state is going to be empty array

    reducers : { // we define reducers as an object we store key:value pair
        
        addTodo : (state,action) => { //addTodo action is => (key), and value is going to be => (reducer Function)
            
            state.push({ id:Date.now(), text : action.payload, completed : false})
        }, 

        removeTodo : (state,action) => { 

            return state.filter( (todo) => todo.id !== action.payload )
        },
    },
})

export const { addTodo , removeTodo } = todoSliceReducer.actions;// this is going to be action creator function

export default todoSliceReducer.reducer; // we need to pass reducer in 'createStore' function