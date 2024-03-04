import React, { useEffect } from "react";
import "../css/dashboard.css";
import Header from "./Header";
import Footer from "./Footer";
import { useFireabase } from '../context/Firebase';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
//removable code
  const navigate = useNavigate();
  const firebase=useFireabase();

  useEffect(()=>{
    if(!firebase.isLoggedIn){
      navigate("/")
    }
  },[firebase,navigate])

//it became messy little here because the data is hard coded
  return (
    <div className="dashboard">
      <Header />
      <div className="productivity-card absolute rounded-2xl">
        <div className="dashboard-text absolute rounded-full bg-[#1a5252d4] flex flex-col ">
          Employee Productivity Dashboard
        </div>
        <div className="bar-text flex absolute justify-between gap-28 whitespace-nowrap ">
            productivity on monday <span className="inline-block">4%</span>
            <div className="bar w-[6px] h-4 bg-[#36A54680] absolute mt-4 rounded-lg left-[-10px] top-[6px] border-[1px] border-[#36A546]"></div>
        </div>
        <div className="bar-text flex absolute justify-between gap-28 whitespace-nowrap top-[150px] ">
            productivity on tuesday <span className="inline-block">92%</span>
            <div className="bar w-[140px] h-4 bg-[#36A54680] absolute mt-4 rounded-lg left-[-10px] top-[6px] border-[1px] border-[#36A546]"></div>
        </div>
        <div className="bar-text flex absolute justify-between gap-[88px] whitespace-nowrap top-[200px] ">
            productivity on wednesday <span className="inline-block">122%</span>
            <div className="bar w-[183px] h-4 bg-[#36A54680] absolute mt-4 rounded-lg left-[-10px] top-[6px] border-[1px] border-[#36A546]"></div>
        </div>
        <div className="bar-text flex absolute justify-between gap-[109px] whitespace-nowrap top-[250px] ">
            productivity on thursday <span className="inline-block">93%</span>
            <div className="bar w-[132px] h-4 bg-[#36A54680] absolute mt-4 rounded-lg left-[-10px] top-[6px] border-[1px] border-[#36A546]"></div>
        </div>
        <div className="bar-text flex absolute justify-between gap-[120px] whitespace-nowrap top-[300px] ">
            productivity on friday <span className="inline-block">89%</span>
            <div className="bar w-[132px] h-4 bg-[#36A54680] absolute mt-4 rounded-lg left-[-10px] top-[6px] border-[1px] border-[#36A546]"></div>
        </div>
        <div className="bar-text flex absolute justify-between gap-[109px] whitespace-nowrap top-[353px] ">
            productivity on saturday <span className="inline-block">98%</span>
            <div className="bar w-[146px] h-4 bg-[#36A54680] absolute mt-4 rounded-lg left-[-10px] top-[6px] border-[1px] border-[#36A546]"></div>
        </div>
       
      </div>
    
      <Footer />

      
    </div>
  );
};

export default Dashboard;
