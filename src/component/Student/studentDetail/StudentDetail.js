import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../card/Card';
import Loader from '../../loader/Loader';
import DOMPurify from 'dompurify';


const StudentDetail = () => {
   

  return (
    <div className="product-detail">
    <h3 className="--mt">Student Detail</h3>
    <Card cardClass="card">
    {/* {isLoading && <Loader/>} */}
       
          <div className="detail">
            <Card cardClass="group">
                
                    <img />
              
                    {/* <p>No image set for this student </p> */}
               
                </Card>
                <h4>Student Profile</h4>
                <hr/>
                <h4>
                    <span className='badge'> Name: </span> &nbsp;
                </h4>
                <p>
              <b>&rarr; ID : </b> 
            </p>
            <p>
              <b>&rarr; Course(s) : </b> 
            </p>
            <p>
              <b>&rarr; Phone no : </b> 
            </p>
            <p>
              <b>&rarr; Email : </b> 
            </p>
            <p>
              <b>&rarr; Price : </b> {"₦"}
            
            </p>
            <p>
              <b>&rarr; paid: </b> {"₦"}
              {/* {student.price - student.paid} */}
            </p>
            <p>
              <b>&rarr; Amount due : </b> {"₦"}
              
            </p>
            <p>
              <b>&rarr;Date Reg : </b>
             
            </p>
            
            <hr/>
            <div dangerouslySetInnerHTML={{
                __html:DOMPurify.sanitize()
            }}></div>

                <hr/>
                <code className='--color-dark'> created on </code>
                <br/>
                <code className='--color-dark'> Last Updated</code>

            
                </div>
        

  

</Card></div>
  )}
export default StudentDetail