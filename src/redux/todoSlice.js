import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:'todo',
    initialState:{
        value:"",
        todoTask:['task1','task2']
    },
    reducers:{
        setValue(state,action)
        {
            state.value = action.payload
        }
        ,
        addTask(state)
        {
           state.value.trim() !== '' ? state.todoTask.push(state.value) : ''
            state.value = "";
        }
        ,
        deleteTask(state,action)
        {
        //    state.todoTask.splice(action.payload , 1);
           //or
           state.todoTask = state.todoTask.filter((item,index)=>  index!==action.payload  )
        }
    }
})


export const{setValue,addTask , deleteTask} = todoSlice.actions;
export default todoSlice.reducer;