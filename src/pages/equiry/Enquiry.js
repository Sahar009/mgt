import React from 'react'
import EnquiryForm from '../../component/enquiry/enquiryform/EnquiryForm'
import EnquiryList from '../../component/enquiry/enquirylist/EnquiryList'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loader from '../../component/loader/Loader'

const initialState ={
  name: '',
  // course:'',
  // paid:'',
  email:'',
  // phone:''
}

const AddStudent = () => {
  
  return (
    <div className='--grid-15'>
      {/* {isLoading && <Loader/>} */}
         
         <EnquiryForm
         />
         <EnquiryList/>
    </div>
  )
}

export default AddStudent
