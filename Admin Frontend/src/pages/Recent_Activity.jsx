import { Navbar } from "../Component/Navbar";

export const Activity = () => {
    return (
        <div className="w-screen h-screen bg-home-right">
            <Navbar />
            <div className="h-screen flex">
                {/* Sidebar (Dashboard) */}
                <div className="w-60 bg-home-left p-4">
                    Dashboard
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-8">
                    {/* Center the content in the middle of the main content area */}
                    <div className="flex justify-between ">
                        <h1 className="font-bold text-2xl mb-4 text-1stfont">Recent Activity</h1>

                        <div className="flex gap-2">
                            <h2 className="font-semibold text-1stfont ">Work Campus :</h2>
                            <p className="bg-white relative px-4 w-60 rounded-xl flex items-center font-semibold bottom-3">Vijyapur , Madhya Pradesh</p>
                        </div>

                    </div>
                    <div className="bg-white rounded-md" >
                        <div >
                            <ul className="flex justify-around font-semibold">
                                <li>Employee</li>
                                <li>In-Time</li>
                                <li>Out-Time</li>
                                <li>Working Hour</li>
                                <li>Last Location</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <div className="flex flex-col gap-3 py-4">
                                    <ul className="flex justify-around items-center bg-gray mx-3 p-2 font-semibold rounded-md ">
                                        <li>
                                            <div className="bg-light-blue text-blue-600 font-bold  rounded-full w-14 h-14 p-4">
                                                AK
                                            </div>
                                        </li>
                                        <li>Priyanshu Lohani</li>
                                        <li>8:00</li>
                                        <li>17:00</li>
                                        <li>8:00 Hrs</li>
                                        <li>Gail Vijyapur,Guna Madhya Pradesh</li>
                                    </ul>
                                    <ul className="flex justify-around items-center bg-gray mx-3 p-2 font-semibold rounded-md ">
                                        <li>
                                            <div className="bg-light-blue text-blue-600 font-bold  rounded-full w-14 h-14 p-4">
                                                AK
                                            </div>
                                        </li>
                                        <li>Uday Kumar</li>
                                        <li>8:00</li>
                                        <li>17:00</li>
                                        <li>8:00 Hrs</li>
                                        <li>Gail Vijyapur,Guna Madhya Pradesh</li>
                                    </ul>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
