import { Navbar } from "../Component/Navbar"
import { Sidebar } from "../Component/Sidebar"

export const Insights = () => {
    return <div className="w-screen h-screen bg-home-right overflow-y-hidden">
        <Navbar />
        <div className="h-screen flex">
            <Sidebar />
            <div className="flex-1 p-8">
            <div className="flex justify-between  ">
                        <div className="font-bold text-2xl mb-4 text-1stfont">Geolocation Based Attendence System (GeoAS)</div>
                        <div className="flex gap-2">
                            <h2 className="font-semibold text-1stfont ">Work Campus :</h2>
                            <select className="bg-white relative px-4 w-60 rounded-xl flex items-center font-semibold bottom-3">
                                <option>Vijyapur , MP</option>
                                <option>Bhopal , Madhya Pradesh</option>
                            </select>
                        </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <img src="gmaps.svg" className="w-[72rem] h-[16rem]" alt="" />
                    </div> 
                    <div className="flex justify-around mt-1">
                        <img src="attoverview.svg" alt="" className="w-[24rem] h-[16rem]" />
                        <img src="offsiteonsite.svg" alt="" className="relative w-[20rem]"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

}