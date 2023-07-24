import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from "../../component/card/Card"
import Loader from "../../component/loader/Loader"
import { selectIsUser } from "../../redux/features/authSlice"
import './profile.scss';
import { toast } from "react-toastify";

const EditProfile = () => {
  

return (
  <div className="profile --my2">
  {isLoading && <Loader />}

  <Card cardClass={"card --flex-dir-column"}>
    <span className="profile-photo">
      <img src={user?.photo} alt="profilepic" />
    </span>
    <form className="--form-control --m" onSubmit={saveProfile}>
      <span className="profile-data">
        <p>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={profile?.name}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>Email:</label>
          <input type="text" name="email" value={profile?.email} disabled />
          <br />
          <code>Email cannot be changed.</code>
        </p>
        <p>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={profile?.phone}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>Bio:</label>
          <textarea
            name="bio"
            value={profile?.bio}
            onChange={handleInputChange}
            cols="30"
            rows="10"
          ></textarea>
        </p>
        <p>
          <label>Photo:</label>
          <input type="file" name="image" onChange={handleImageChange} />
        </p>
        <div>
          <button className="--btn --btn-primary">Save changes</button>
        </div>
      </span>
    </form>
  </Card>
  <br />
  {/* <ChangePassword /> */}
</div>
  )
}

export default EditProfile