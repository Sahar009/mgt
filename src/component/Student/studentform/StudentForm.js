import React from 'react';
import './studentForm.scss'
import Card from '../../card/Card.js'

const StudentForm = () => {
  return (
    <div className="add-student">
        <Card cardClass={"card"}>
        <form onSubmit=''>
        <Card cardClass={"group"}>
            <label>Student Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
            />

            {/* {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No image set for this poduct.</p>
            )} */}
            <label>Student Name:</label>
          <input
            type="text"
            placeholder="Student  name"
            name="name"
           
          />

          <label>Course:</label> 
          {/* Student Category */}
          <input
            type="text"
            placeholder="course"
            name="course"
         
          />

          <label>Paid:</label>
          <input
            type="text"
            placeholder="paid Price"
            name="price"
            
          />

          <label>Gender:</label>
          <div style={{display:'flex',gap:'1rem', marginBottom:'2rem'}}>
          <label>male:</label>
          <input
            type="radio"
            name="Gender"
          />
          <label>female:</label>
          <input
            type="radio"
            name="Gender"
          />
          </div>
          <label>Phone number:</label>
          <input
            type="number"
            placeholder=" +234 Phone number"
            name="phone"
            
          />
          <label>email:</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            
          />
          <label>Course(s):</label>
          <select>
            <option>--AutoCad--</option>
            <option>--C C# C++ --</option>
            <option>--Python Programming--</option>
            <option>--Java Programming--</option>
            <option>--Data Analysis--</option>
            <option>--Graphic Design--</option>
            <option>--Degital marketing--</option>
            <option>--Web Development--</option>
            <option>--Other--</option>

          </select>
          <label>Amount paid:</label>
          <input
            type='number'
            placeholder="paid"
            name="paid"
            
          />
          <label>Amount due:</label>
          <input
            type='number'
            placeholder="due"
            name="due"
            
          />
          <label>Start Date </label>
          <input
            type='date'
          />

          {/* <label>Student Description:</label> */}
          {/* <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          /> */}

          </Card>
          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Student
            </button>
          </div>

        </form>
        </Card>
    </div>
  )
}

export default StudentForm