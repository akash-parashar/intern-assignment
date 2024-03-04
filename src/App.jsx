
import './App.css'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Users from './components/Users'

function App() {

  return (
    <>
   <div className='w-full h-full'>
    <Routes>
      <Route element={<Login/>} path='/' ></Route>
      <Route element={<SignUp/>} path='/signup'></Route>
      <Route element={<Dashboard/>} path='/dashboard'></Route>
      <Route element={<Users/>} path='/users'></Route>
    </Routes>
    

   </div>
    </>
  )
}

export default App
