import React, { useEffect, useRef, useState } from 'react'
import Group3 from "../assets/Group3.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useFireabase } from '../context/Firebase';
import { checkValidData } from '../utils/validate';


const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const firebase=useFireabase();
    // console.log(firebase)
    useEffect(()=>{
      if(firebase.isLoggedIn){
        navigate("/dashboard")
      }
    },[firebase,navigate])

    const handleSubmit=async (e)=>{
      const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
        e.preventDefault();
        // console.log("signing up a user")
    const result =  await firebase.signupUserWithEmailAndPassword(email.current.value,password.current.value)
      // console.log(result);
    }


  return (
    <div className="login  h-screen w-screen">
      <div className="absolute left-[40%] top-[134px]">
        <img
          src={Group3}
          alt=""
          className="w-[90px] h-[90px] rounded-full  mx-auto"
        />
      </div>
      <div
        className="absolute top-[45%] left-[22%] mx-auto"
        
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
            className="input rounded-full mt-7 text-white"
          />
          <p className="text-red-500 font-bold text-lg py-2 ml-6">
            {errorMessage}
          </p>
          <button
            className="btn-login rounded-full mt-16"
          >
            signup
          </button>
          <Link className='text-[#36A546] ml-10 mt-10 'to={"/"}> Already a user?click here</Link>
          
        </form>
      </div>

      
    </div>
  )
}

export default SignUp