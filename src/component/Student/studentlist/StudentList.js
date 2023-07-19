import React, { useEffect, useState } from 'react'
import Search from '../../search/Search'
import { AiFillMail, AiOutlineEye } from 'react-icons/ai'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { RiWhatsappFill} from 'react-icons/ri'

import './studentlist.scss'
import { SpinnerImg } from '../../loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const StudentList = ({students, isLoading}) => {








const confirmDelete = (id) => {
  confirmAlert({
    title: "Delete Student",
    message: "Are you sure you want to delete this student!!!",
    buttons: [
      {
        label: "Delete",
        // onClick: () => delStudent(id)
      },
      {
        label: "Cancel",
        // onClick: () => alert('Click No')
      },
    ],
  });
};

// begin pagination
const [currentItems, setCurrentItems] = useState([]);
const [pageCount, setPageCount] = useState(0);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 15;


  // end pagination



  return (
    <div className="student-list">
    <hr />
    <div className="table">
      <div className="--flex-between --flex-dir-column">
        <span>
          <h3>Students</h3>
        </span>
        <span>
          <Search />
        </span>
      </div>
      {isLoading && <SpinnerImg/>}
      <div className="table">
        {isLoading && students.length === 0 ? (
          <p>-- No Student Found , please add a student</p>
        ):(
          <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Courses</th>
                  <th>Price</th>
                  <th>paid</th>
                  <th>Balance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentItems.map((student,index) =>{
                    const {_id, name, price,paid,course,email,phone} = student
                    return(
                      <tr key={_id}>
                      <td>{index+1}</td>
                      <td>{}</td>
                      <td>{course}</td>
                      <td>
                        {"₦"}
                       {price}
                      </td>
                     
                      <td>
                        {"₦"}
                       {paid}
                      </td>
                      <td>
                        {"₦"}
                       {price - paid}
                      </td>
                      
                      <td className="icons">
                        <span>
                          <Link to={`/student-detail/${_id}`}>
                            <AiOutlineEye size={25} color={"var(--light-blue)"} />
                          </Link>
                        </span>
                        <span>
                          <Link to={`/edit-student/${_id}`}>
                            <FaEdit size={20} color={"green"} />
                          </Link>
                        </span>
                        <span>
                          <FaTrashAlt
                            size={20}
                            color={"red"}
                        onClick={() => confirmDelete(_id)}
                          />

                        
                        </span>
                        <span>
                        <a href={`https://api.whatsapp.com/send?phone=234${phone}`} target='_blank'><RiWhatsappFill size={23}
                            color={"#28a745"}/></a>
                      </span>
                      <span>
                        <a href={`mailto:${email}`}target='_blank'><AiFillMail size={23}
                           color={"var(--light-blue)"}/></a>
                      </span>
                       
                      </td>
                      
                      

                     
                    </tr>
                    )
                  })
                }
                   
                 
              </tbody>
              </table>
        )}
      
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={12}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
      />
      </div>
      </div>
  )
}

export default StudentList