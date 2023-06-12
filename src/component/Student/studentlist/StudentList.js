import React from 'react'
import Search from '../../search/Search'
import { AiOutlineEye } from 'react-icons/ai'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import './studentlist.scss'

const StudentList = () => {
  return (
    <div className="product-list">
    <hr />
    <div className="table">
      <div className="--flex-between --flex-dir-column">
        <span>
          <h3>Student Inventory</h3>
        </span>
        <span>
          <Search/>
        </span>
      </div>
      <div className="table">
      <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  
                  <th>paid</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                    <tr >
                      <td>{1}</td>
                      <td>Habeeb</td>
                      <td>Front end</td>
                      <td>
                        {"₦"}
                       '150,000'
                      </td>
                     
                      <td>
                        {"₦"}
                        70,000
                      </td>
                      <td className="icons">
                        <span>
                          {/* <Link to={`/product-detail/${_id}`}> */}
                            <AiOutlineEye size={25} color={"var(--light-blue)"} />
                          {/* </Link> */}
                        </span>
                        <span>
                          {/* <Link to={`/edit-product/${_id}`}> */}
                            <FaEdit size={20} color={"green"} />
                          {/* </Link> */}
                        </span>
                        <span>
                          <FaTrashAlt
                            size={20}
                            color={"red"}
                        
                          />
                        </span>
                      </td>
                    </tr>
                 
              </tbody>
              </table>
      </div>
      </div>
      </div>
  )
}

export default StudentList