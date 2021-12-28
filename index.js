import React from 'react'
import Typography from '@mui/material/Typography';
import {  useSelector } from 'react-redux';
const StudentDetail=()=>{
    const selectedStudent=useSelector(state=>state.student.selectedStudent)
    console.log("selectedddd", selectedStudent)
    return(
        <>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Name: {selectedStudent?.name}
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Roll: {selectedStudent?.roll}
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                     Description: {selectedStudent?.description}
                </Typography>
    </>
    )
}
   export default StudentDetail