import React from 'react'
import StudentForm from '../../component/Student/studentform/StudentForm'



const initialState ={
  name: '',
  course:'',
  paid:'',
  email:'',
  phone:'',

}

const AddStudent = () => {
 

 

  return (
    <div>
      {/* {isLoading && <Loader/>} */}
         <h3 className="--mt">Add New Student</h3>
         <StudentForm
         />
    </div>
  )
}

export default AddStudent
