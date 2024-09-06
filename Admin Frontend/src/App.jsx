import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home"
import { Login } from "./pages/Login"
import { Activity } from "./pages/Recent_Activity"
import { AddEmployee } from './pages/AddEmployee'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/activity" element= {<Activity/>}/>
        <Route path="/addEmployee" element= {<AddEmployee/>}/>
      </Routes>

    </BrowserRouter>
    
    </>

  )


}

export default App
