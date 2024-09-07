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
                <div className="flex">
                    <div>
                        <img src="overview.svg" alt="" />
                    </div>
                    <div>
                        <img src="oncampus.svg" alt="" />
                        <img src="offsite.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>

}