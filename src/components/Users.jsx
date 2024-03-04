import React, { useRef, useState } from 'react'
import EmployeeCard from './EmployeeCard'
import Header from "./Header";
import "../css/users.css"
import { GrSearch } from "react-icons/gr";
import Footer from "./Footer";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    { id: 1, name: "Arjun", dob: "16-11-2000", role: "Software Engineer" },
    { id: 2, name: "Mahesh", dob: "15-01-2000", role: "Web Developer" },
   
  ];
  const search = useRef(null);
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className='users-page absolute'>
        <div className='header  '>
        <Header setSearchTerm={setSearchTerm} />
        </div>
        <div className='search-bar relative rounded-full flex  justify-end  '>
            <input type="text" className='input-box text-black w-[3000px] h-[55px] rounded-full ' placeholder='Search with name' ref={search} />
            <button className='absolute mt-5 mr-2' onClick={()=>setSearchTerm(search.current.value)} ><GrSearch /></button>
        </div>
        <div className='info absolute top-[30%] '>
            {filteredEmployees.map((employee) => (
              <div className='card1 ' key={employee.id}>
                <EmployeeCard id={employee.id} name={employee.name} dob={employee.dob} role={employee.role} />
              </div>
            ))}
        </div>
        <div className='w-[412px] absolute top-[-0.2%]'>
        <Footer/>
        </div>
    </div>
  )
}

export default Users