import "./studentsummary.scss";
import { TbCurrencyNaira} from "react-icons/tb";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import Infobox from "../../infobox/Infobox";
import { FaRegistered } from "react-icons/fa";
import { AiTwotoneHourglass } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CALC_COURSE, CALC_STORE_VALUE, selectCourse, selectTotalStoreValue } from "../../../redux/features/student/studentSlice";
import { useEffect } from "react";


// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const StudentSummary = ({students}) => {

  const dispatch = useDispatch()
  const totalStoreValue = useSelector(selectTotalStoreValue)
  const courses = useSelector(selectCourse)
  useEffect(() =>{
dispatch(CALC_STORE_VALUE(students));
dispatch(CALC_COURSE(students))
  },[dispatch,students])
  // Icons
const earningIcon = <TbCurrencyNaira size={40} color="#fff" />;
const studentIcon = <TbCurrencyNaira size={40} color="#fff" />;
const RegisterIcon = <FaRegistered size={40} color="#fff" />;
const PendingIcon = <AiTwotoneHourglass size={40} color="#fff" />;


  return (
    <div className="student-summary">
      <h3 className="--mt">Inventory Statistics</h3>
      <div className="info-summary">
        <Infobox icon={earningIcon} text={'Income'} count={`₦${formatNumbers(totalStoreValue)}`}  bgColor="card2"/>
        <Infobox icon={studentIcon} text={'Overdue' } count={0} bgColor="card3"/>
        <Infobox icon={PendingIcon} text={'Pending Students' } count={0} bgColor="card1"/>
        <Infobox icon={RegisterIcon} text={'Reg student' } count={students.length} bgColor="card4"/>
        <Infobox icon={RegisterIcon} text={'Courses' } count={courses.length} bgColor="card5"/>
        </div>
        </div>
  )
}

export default StudentSummary