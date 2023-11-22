import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice =  createSlice({
    name: 'course',
    initialState:{
        searchTerm: '',
        data: []

    },
    reducers:{
        addCourses(state,action){
            state.data.push({
                name: action.payload.name,
                description: action.payload.description,
                cost: action.payload.cost,
                id:nanoid(),
            })
        },
        removeCourse(state,action){
            const updateCourses=state.data.filter((course)=>{
                return course.id !== action.payload
            })
            state.data = updateCourses
        },
        changeSearchTerm(state,action){
            state.searchTerm = action.payload
        },
        
    }
})

export const {addCourses, removeCourse, changeSearchTerm} = courseSlice.actions
export const courseReducer = courseSlice.reducer