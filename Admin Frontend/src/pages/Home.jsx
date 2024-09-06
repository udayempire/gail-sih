import { Navbar } from "../Component/Navbar"
import { Sidebar } from "../Component/Sidebar"


export const Home = ()=>{
    return <div className="w-screen h-screen bg-home-right">
        <Navbar/>

            <Sidebar/>

        
    </div>
}