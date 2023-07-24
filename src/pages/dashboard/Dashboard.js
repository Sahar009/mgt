import {useEffect, useRef} from 'react';
import * as V from 'victory';
import { VictoryBar,VictoryChart,VictoryAxis } from 'victory';
import './dashboard.scss'
import Card from '../../component/card/Card';
import StudentSummary from '../../component/Student/studentSummary/StudentSummary';



const Dashboard = () => {
 

  
  return (
    <div >
      <h1>Dashboard</h1>
      <Card >
        <div className='--flex-between --flex-center'>
      <StudentSummary />
      </div>
      </Card>
     {/* <StudentList students={students} isLoading={isLoading}/> */}
   
    </div>
  )
}

export default Dashboard