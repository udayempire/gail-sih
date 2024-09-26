import { Checkinbar } from "../Component/Checkinbar";
import { Navbar } from "../Component/Navbar";
import { Sidebar } from "../Component/Sidebar";

export const ManualCheckin = () => {
    return (
        <div className="w-screen h-screen bg-home-right overflow-y-hidden">
            <Navbar />
            <div className="h-screen flex">
                {/* Sidebar (Dashboard) */}
                <div> {/* Set a fixed width for the sidebar */}
                    <Sidebar />
                </div>
                {/* Main Content Area */}
                <div className="flex-1 p-8 overflow-auto"> {/* Allow main content to take up the rest of the space */}
                    {/* Center the content in the middle of the main content area */}
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl mb-4 text-1stfont">Manual Check-In Approval</h1>
                        <div className="flex gap-2">
                            <h2 className="font-bold text-1stfont">Work Campus :</h2>
                            <select className="bg-white relative px-4 w-60 rounded-xl flex items-center font-semibold bottom-3">
                                <option>Vijyapur , MP</option>
                                <option>Bhopal , Madhya Pradesh</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-white rounded-md">
                        <div className="relative right-14 top-4">
                            <div className="flex justify-around font-semibold text-xl text-1stfont">
                                <div className="relative left-16">Employee</div>
                                <div className="flex gap-20">
                                    <div className="relative left-16">In-Time</div>
                                    <div className="relative left-6">Out-Time</div>
                                    <div className="relative left-7">Working Hour</div>
                                    <div className="relative right-3">Last Location</div>
                                    <div className="relative right-3">Activity</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Checkinbar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
