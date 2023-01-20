import React,{useState,useEffect} from 'react'
import CreateApiInterceptor from "../../features/Interceptors/apiInterceptor";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from '../../features/reducers/slice';
import { accessTokenModifier } from "../../features/reducers/accessToken";
import Cookies from 'js-cookie';




function AdminProfile() {

  const dispatch=useDispatch()

  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetcher = async () => {
      const result = await CreateApiInterceptor().get(
        "https://exceptions-website-backend.vercel.app/profile/me"
      );
      setUsername(result.data.firstName);
    };
  
    fetcher();
  }, []);

  const handleLogout=()=>{
    dispatch(addTodo(false))
    dispatch(accessTokenModifier(''))
    
    Cookies.remove("token")
    
  }


  return (
    <div>
      <h1>{username ? `Welcome to admin home ${username}` : null}</h1>
      <button className='btn btn-warning btn-outline' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default AdminProfile
