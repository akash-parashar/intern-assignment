import React from "react";
import "../css/employeecard.css";
const EmployeeCard = ({id,name,dob,role}) => {
  return (
    <div className="card ml-4 mt-4 relative text-white h-[220px] w-[300px] rounded-lg">
      <div className="employee-info flex flex-col gap-7 ">
        <span className="inline text-white mt-4  ml-5">EMP ID :<span className="inline-block ml-4">{id}</span> </span>
        <span className="inline text-white  ml-5">Name :<span className="inline-block ml-4">{name}</span> </span>
        <span className="inline text-white  ml-5">D.O.B :<span className="inline-block ml-4">{dob}</span> </span>
        <span className="inline text-white  ml-5">Role :<span className="inline-block ml-4">{role}</span> </span>
        
      </div>
    </div>
  );
};

export default EmployeeCard;
