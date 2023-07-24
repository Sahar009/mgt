import {useEffect, useRef} from 'react';
import * as V from 'victory';
import { VictoryBar,VictoryChart,VictoryAxis } from 'victory';
import './dashboard.scss'
import Card from '../../component/card/Card';
import useRedirectlogout from '../../component/customhook/useRedirectlogout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/features/authSlice';
import { getStudents, selectIsLoading } from '../../redux/features/student/studentSlice';
import StudentList from '../../component/Student/studentlist/StudentList';
import { selectStudent } from '../../redux/features/student/studentSlice';
import StudentSummary from '../../component/Student/studentSummary/StudentSummary';



const Dashboard = () => {
  useRedirectlogout('/login');
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const studentState = useSelector((state) => state.student);
  
  const { students, isLoading, isError, message } = useSelector(
    (state) => state.student
  );

  useEffect(() =>{
if (isLoggedIn === true){
dispatch(getStudents())
// console.loge)(students)
// isLoading(false)

if(isError){
  console.log(message)
}
}

  },[isLoggedIn,dispatch,message,isError,students])

  // const send = (e) =>{
    // hbcode 
  //   e.preventDefault();
  //   emailjs.sendForm
  // }
  
  return (
    <div >
      <h1>Dashboard</h1>
      <Card >
        <div className='--flex-between --flex-center'>
      <StudentSummary students={students}/>
      </div>
      </Card>
     {/* <StudentList students={students} isLoading={isLoading}/> */}
   
    </div>
  )
}

export default Dashboard