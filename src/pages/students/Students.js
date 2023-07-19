import {useEffect} from 'react'
import StudentList from '../../component/Student/studentlist/StudentList'
import Card from '../../component/card/Card';
import { useDispatch, useSelector } from 'react-redux';



const Students = () => {
   
  return (
    <div>All students
         <StudentList  />
    </div>
  )
}

export default Students