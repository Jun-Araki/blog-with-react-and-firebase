import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from "../firebase";
import { useNavigate } from 'react-router-dom';


const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWIthGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("isAuth", true)
        setIsAuth(true);
        navigate("/");
      })
  }
  return (
    <div>
      <p>Login to get started</p>
      <button onClick={loginInWIthGoogle}>Login in Google</button>
    </div>
  )
}

export default Login
