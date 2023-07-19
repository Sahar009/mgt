import "./studentsummary.scss";
import { TbCurrencyNaira} from "react-icons/tb";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import Infobox from "../../infobox/Infobox";
import { FaRegistered } from "react-icons/fa";
import { AiTwotoneHourglass } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";



// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const StudentSummary = ({students}) => {

  
  // Icons
const earningIcon = <TbCurrencyNaira size={40} color="#fff" />;
const studentIcon = <TbCurrencyNaira size={40} color="#fff" />;
const RegisterIcon = <FaRegistered size={40} color="#fff" />;
const PendingIcon = <AiTwotoneHourglass size={40} color="#fff" />;


  return (
    <div className="student-summary">
      <h3 className="--mt">Inventory Statistics</h3>
      <div className="info-summary">
        <Infobox icon={earningIcon} text={'Income'}  bgColor="card2"/>
        <Infobox icon={studentIcon} text={'Overdue' }  bgColor="card3"/>
        <Infobox icon={PendingIcon} text={'Pending Students' }  bgColor="card1"/>
        <Infobox icon={RegisterIcon} text={'Reg student' }  bgColor="card4"/>
        <Infobox icon={RegisterIcon} text={'Courses' }  bgColor="card5"/>
        </div>
        </div>
  )
}

export default StudentSummary