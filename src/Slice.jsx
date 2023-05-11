import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const Slice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo: (state,actions) => {
            state.todos.push(actions.payload)
            console.log(actions.payload);
        },
        editTodo:(state,actions)=>{
            state.todos.splice(actions.payload,1)
        }
    }
})
export const { addTodo, editTodo} = Slice.actions;
export default Slice.reducer;