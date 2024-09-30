import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartSimple, faClock, faFile, faPersonWalkingArrowRight, faUserCheck, faUserCog, faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons
import { useState } from "react";

export function Sidebar() {
    const [isSidebarOpen, setIsSidebarClose] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarClose(!isSidebarOpen);
        console.log("Hello")
    }
    return (
        <div className="w-40">
            <button className="p-2  text-blue-700 font-bold ml-9 fixed left-4" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <div className={"fixed top-0 left-0 h-full "}>
                <div className="w-30 bg-white p-4 h-full">
                    <div className="flex flex-col gap-6 my-10 font-bold text-xs text-blue-700 drop-shadow-2xl">
                        {/* Make icons stacked on top of their labels */}
                        <Link to="/insights" className="hover:text-black hover:bg-blue-200  hover:rounded-md hover:ease-in duration-150 flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faChartSimple} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Dashboard</span>
                        </Link>
                        <Link to="/activity" className="hover:text-black hover:bg-blue-200 hover:rounded-md hover:ease-in duration-150 flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faClock} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Recent</span>
                            <span>Activity</span>
                        </Link>
                        <Link to="/addemployee" className="hover:text-black hover:bg-blue-200  hover:rounded-md hover:ease-in duration-150 flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faUserPlus} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Add New</span>
                            <span>Employee</span>
                        </Link>
                        <Link to="/updateemployee" className="hover:text-black hover:bg-blue-200  hover:rounded-md hover:ease-in duration-150  flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faUserPen} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Update</span>
                            <span>Employee</span>
                        </Link>
                        <Link to="/manualcheckin" className="hover:text-black hover:bg-blue-200  hover:rounded-md hover:ease-in duration-150 flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faUserCheck} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Manual</span>
                            <span>Approval</span>
                        </Link>
                        <Link to="/leaveapproval" className="hover:text-black hover:bg-blue-200 hover:rounded-md hover:ease-in duration-150  flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faUserCog} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Leave</span>
                            <span>Approval</span>
                        </Link>
                        <Link to="/employeereport" className="hover:text-black hover:bg-blue-200  hover:rounded-md hover:ease-in duration-150  flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faFile} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>Employee</span>
                            <span>Report</span>
                        </Link>
                        <Link to="/login" className="hover:text-black hover:bg-blue-200 hover:rounded-md hover:ease-in duration-150 flex flex-col items-center p-1">
                            <FontAwesomeIcon icon={faPersonWalkingArrowRight} style={{ color: "#0037FF", fontSize: "24px", width: "16px", height: "18px" }} />
                            <span>LogOut</span>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
}
