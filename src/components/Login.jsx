import { useState, useRef, useEffect } from "react";
import Group3 from "../assets/Group3.jpg";
import { useFireabase } from '../context/Firebase';
import { checkValidData } from "../utils/validate";


import { Link, Navigate, useNavigate } from "react-router-dom";
import "../css/login.css";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const firebase=useFireabase();
  const email = useRef(null);
  const password = useRef(null);

  useEffect(()=>{
    if(firebase.isLoggedIn){
      navigate("/dashboard")
    }
  },[firebase,navigate])

  const handleSubmit= async (e)=>{
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    e.preventDefault();
    // console.log("login in a user");
    const result = await firebase.signinUserWithEmailAndPassword(email.current.value,password.current.value);
    // console.log(result)
  }

 
  return (
    <div className="login   h-screen w-screen ">
      <div className="absolute logo left-[48%] top-[134px]">
        <img
          src={Group3}
          alt=""
          className="w-[90px] h-[90px] rounded-full  mx-auto"
        />
      </div>
      <div
        className="login-form absolute top-[45%] left-[22%] mx-auto "
       
      >
        <form action="" className=" flex flex-col " onSubmit={handleSubmit}>
          <input
            ref={email}
            type="text"
            placeholder="    email"
            className="input rounded-full text-white"
          />
          <input
            ref={password}
            type="password"
            placeholder="     password"
            className="input rounded-full mt-7  text-white"
          />
          <p className="text-red-500 font-bold text-lg py-2 ml-6">
            {errorMessage}
          </p>
        
          <button
            className="btn-login rounded-full mt-16"
          >
          Login In
          </button>
          <a className="text-[#36A546] ml-16 mt-8">forgot password</a>
      <Link to={"/signup"}
      
      >
          <p
            className="sign-up-link py-4 cursor-pointer text-[#36A546] ml-8 "
          >
           
               "New User sign up now"
             
          </p>

      </Link>
        </form>
      </div>

      <div></div>
    </div>
  );
  }
;
export default Login;
