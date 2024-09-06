import { Link } from "react-router-dom"
export function Sidebar() {
    return <div className="w-60 bg-home-left p-4 h-full">
            <div className="flex flex-col gap-10 my-10 font-semibold text-2ndfont ">
                    <Link to="/insights" className="hover:text-black">Insights</Link>
                    <Link to="/addemployee" className="hover:text-black">Add New Employee</Link>
                    <Link to="/updateemployee" className="hover:text-black">Update Employee details</Link>
                    <Link to="/manualcheckin" className="hover:text-black">Manual Check-In Approval</Link>
                    <Link to="/leaveapproval" className="hover:text-black">Leave Approval</Link>
                    <Link to="/employeereport" className="hover:text-black">Employee Report</Link>
                    <Link to="/activity" className="hover:text-black">Recent Activity</Link>
                    <Link to="/login" className="hover:text-black">LogIn / LogOut</Link>
            </div>
    </div>

}