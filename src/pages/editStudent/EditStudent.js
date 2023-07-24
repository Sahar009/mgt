import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
// import { getStudent, getStudents, selectIsLoading, selectStudent, updateStudent } from '../../redux/features/student/studentSlice';
import { useEffect } from 'react';
import Loader from '../../component/loader/Loader';
import StudentForm from '../../component/Student/studentform/StudentForm';

const EditStudent = () => {

  

  return (
    <div>
      {/* {isLoading && <Loader/>} */}
         <h3 className="--mt">Edit Student</h3>
         <StudentForm
         />
    </div>
  )
}

export default EditStudent