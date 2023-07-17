import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Card from "../../component/card/Card"
import Loader from "../../component/loader/Loader"
import { selectIsUser } from "../../redux/features/authSlice"
import './profile.scss';
import { toast } from "react-toastify";

const EditProfile = () => {
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);
    const user = useSelector(selectIsUser);
    const {email} = user;


useEffect(()=>{
if (!email){
    navigate('/profile');
}
},[email, navigate]);

const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };


return (
    <div> To be done </div>
  )
}

export default EditProfile