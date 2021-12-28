import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
name:"student",
  initialState: {
      studentList:[
          {
        name: "Samia",
        roll:"058",
        description:"I am a student of Sir syed university"
      },
    ],
    selectedStudent:{}
  },
  reducers: {
    addStudent: (state, action) => {
        // console.log("payload", action.payload)
            state.studentList.push(action.payload)
    },
    setSelectedStudent: (state, action) => {
        console.log("payload", action.payload)
        state.selectedStudent=action.payload
    },
  },
});

export const {  addStudent,setSelectedStudent } = slice.actions;

export const getStudent = state => state.student.studentList;

export default slice.reducer;
