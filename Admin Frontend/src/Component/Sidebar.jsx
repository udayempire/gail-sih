import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <div className="w-60 bg-home-left p-4 h-full">
            <div className="flex flex-col gap-10 my-10 font-semibold text-2ndfont">
                {/* Apply hover:text-white to all links */}
                <Link to="/insights" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Insights</Link>
                <Link to="/activity" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Recent Activity</Link>
                <Link to="/addemployee" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Add New Employee</Link>
                <Link to="/updateemployee" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Update Employee details</Link>
                <Link to="/manualcheckin" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Manual Check-In Approval</Link>
                <Link to="/leaveapproval" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Leave Approval</Link>
                <Link to="/employeereport" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">Employee Report</Link>
                <Link to="/login" className="hover:text-black hover:bg-blue-200 hover:p-2 hover:rounded-md hover:ease-in duration-300 hover:translate-x-2 ">LogIn / LogOut</Link>
            </div>
        </div>
    );
}
