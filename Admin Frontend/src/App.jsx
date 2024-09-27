import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Home} from "./pages/Home"
import { Login } from "./pages/Login"
import { Activity } from "./pages/Recent_Activity"
import { AddEmployee } from './pages/AddEmployee'
import { UpdateEmployee } from './pages/updateEmployee'
import { ManualCheckin } from './pages/ManualCheckin'
import { Insights } from './pages/Insights'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/activity" element= {<Activity/>}/>
        <Route path="/addEmployee" element= {<AddEmployee/>}/>
        <Route path="/updateEmployee" element= {<UpdateEmployee/>}/>
        <Route path="/manualcheckin" element= {<ManualCheckin/>}/>
        <Route path="/" element= {<Insights/>}/>
      </Routes>

    </BrowserRouter>
    
    </>

  )


}

export default App
