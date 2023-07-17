import React from 'react'
import './profile.scss'
import Card from '../../component/card/Card'
import { Link } from 'react-router-dom'
const Profile = () => {

    // on going 
  return (
    <div className='profile --my2'>
        
<Card cardClass={'card --flex-dir-column'}>
<span className='profile-photo'>
    <img  alt='profile pic'/>
</span>
<span className="profile-data">
              <p>
                <b>Name : </b> 
                {/* {profile?.name} */}
              </p>
              <p>
                <b>Email : </b> 
                {/* {profile?.email} */}
              </p>
              <p>
                <b>Phone : </b> 
                {/* {profile?.phone} */}
              </p>
              <p>
                <b>Bio : </b>
                {/* {profile?.bio} */}
              </p>
              <div>
                <Link to="/edit-profile">
                  <button className="--btn --btn-primary">Edit Profile</button>
                </Link>
              </div>
            </span>
</Card>
    </div>
  )
}

export default Profile