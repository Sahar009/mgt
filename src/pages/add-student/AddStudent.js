import React from 'react'
import StudentForm from '../../component/Student/studentform/StudentForm'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoading,createStudent } from '../../redux/features/student/studentSlice'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from '../../component/loader/Loader';

const initialState ={
  name: '',
  course:'',
  price:'',
  paid:'',
  email:'',
  phone:'',

}

const AddStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [student, setStudent] = useState(initialState)
  const [studentImage, setStudentImage] = useState('')
  const [imagePreview, setImagePreview] = useState(null)
  const [description, setDescription] = useState('')

  const isLoading = useSelector(selectIsLoading)
  const {name, course, paid,phone,email,price} = student

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  //   console.log('Name:', name);
  // console.log('Value:', value);
    setStudent({ ...student, [name]: value });
  };

  const handleImageChange = (e) => {
  setStudentImage(e.target.files[0])
  setImagePreview(URL.createObjectURL(e.target.files[0]))
  };
  const generateID = (course) =>{
    const letter = course.slice(0,2).toUpperCase()
    const number = Date.now()
    const ID = letter + "-" + number 
    return ID;

  }

  const saveStudent = async (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('ID', generateID(course))
    formData.append('course', course)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('paid', paid)
    formData.append('price', price)
   
    formData.append('description', description)
    formData.append('image', studentImage)

    console.log(...formData)


    await dispatch(createStudent(formData))
    navigate('/dashboard')
    
  }
  return (
    <div>
      {isLoading && <Loader/>}
         <h3 className="--mt">Add New Student</h3>
         <StudentForm
         
         student = {student}
         studentImage = {studentImage}
         imagePreview = {imagePreview}
         description = {description}
         setDescription = {setDescription}
         handleInputChange = {handleInputChange}
         handleImageChange = {handleImageChange }
         saveStudent = {saveStudent}
         />
    </div>
  )
}

export default AddStudent
