import { Link } from "react-router-dom"
export function Sidebar() {
    return <div className="w-60 bg-home-left p-4">
            <div className="flex flex-col gap-10 my-10 font-semibold text-2ndfont ">
                    <Link className="hover:text-black">Dashboard</Link>
                    <Link className="hover:text-black">Add New Employee</Link>
                    <Link className="hover:text-black">Update Employee details</Link>
                    <Link className="hover:text-black">Manual Check-In Approval</Link>
                    <Link className="hover:text-black">Leave Approval</Link>
                    <Link className="hover:text-black">Employee Report</Link>
                    <Link className="hover:text-black">Recent Activity</Link>
                    <Link to="/login" className="hover:text-black">LogIn / LogOut</Link>
            </div>
    </div>

}