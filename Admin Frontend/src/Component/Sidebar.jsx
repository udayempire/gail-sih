import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <div className="w-60 bg-home-left p-4 h-full">
            <div className="flex flex-col gap-10 my-10 font-semibold text-2ndfont">
                {/* Apply hover:text-white to all links */}
                <Link to="/insights" className="hover:text-white">Insights</Link>
                <Link to="/addemployee" className="hover:text-white">Add New Employee</Link>
                <Link to="/updateemployee" className="hover:text-white">Update Employee details</Link>
                <Link to="/manualcheckin" className="hover:text-white">Manual Check-In Approval</Link>
                <Link to="/leaveapproval" className="hover:text-white">Leave Approval</Link>
                <Link to="/employeereport" className="hover:text-white">Employee Report</Link>
                <Link to="/activity" className="hover:text-white">Recent Activity</Link>
                <Link to="/login" className="hover:text-white">LogIn / LogOut</Link>
            </div>
        </div>
    );
}
