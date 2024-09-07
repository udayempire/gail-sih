import { useState } from 'react';
import { recentActivity } from "../Data/recent_activity";

export function Checkinbar() {
    // State to keep track of approval status for each item
    const [approvalStatus, setApprovalStatus] = useState(
        recentActivity.map(() => "pending") // Initially all are pending
    );

    // Function to handle approval (correct or wrong)
    const handleApproval = (index, status) => {
        setApprovalStatus(prevStatus => {
            const newStatus = [...prevStatus];
            newStatus[index] = status; // Set status to "approved" or "notApproved"
            return newStatus;
        });
    };

    return (
        <div className="h-[31rem] my-4 overflow-y-scroll">
            <div className="flex flex-col gap-3 py-4">
                {recentActivity.map((data, index) => (
                    <div key={index} className="flex justify-around items-center bg-gray mx-3 p-2 py-4 font-semibold rounded-md hover:bg-light-blue2">
                        <div className="flex gap-3 items-center">
                            <div className="bg-red-800 w-1 h-14 rounded-md"></div>
                            <div className="bg-light-blue text-blue-600 font-bold rounded-full w-14 h-14 p-4">
                                {`${data.employeeFname[0]}${data.employeeLname[0]}`}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>{`${data.employeeFname} ${data.employeeLname}`}</div>
                                {/* Show the appropriate SVG based on approval status */}
                                {approvalStatus[index] === "approved" ? (
                                    <img src="Approved.svg" alt="Approved" />
                                ) : approvalStatus[index] === "notApproved" ? (
                                    <img src="notApproved.svg" alt="Not Approved" />
                                ) : (
                                    <img src="pending.svg" alt="Pending Approval" />
                                )}
                            </div>
                        </div>
                        <div className="flex gap-[80px] items-center justify-between">
                            <div className="relative left-14">{data.inTime}</div>
                            <div className="relative left-12">{data.outTime}</div>
                            <div className="relative left-28">{data.workHour}</div>
                            <div className="w-48 relative left-28">{data.lastLocation}</div>

                            {/* Buttons or Review Details */}
                            {approvalStatus[index] === "pending" ? (
                                <div className="w-48 flex flex-col relative left-14">
                                    <div className="w-48 flex gap-8">
                                        {/* Correct Button */}
                                        <div
                                            className="w-12 h-12 flex justify-center bg-green-300 rounded-full cursor-pointer"
                                            onClick={() => handleApproval(index, "approved")}
                                        >
                                            <img src="minus.svg" alt="Approve" className="w-8" />
                                        </div>
                                        {/* Wrong Button */}
                                        <div
                                            className="w-12 h-12 flex justify-center bg-red-300 rounded-full cursor-pointer"
                                            onClick={() => handleApproval(index, "notApproved")}
                                        >
                                            <img src="plus.svg" alt="Disapprove" className="w-8" />
                                        </div>
                                    </div>
                                    {/* Review Check-In Info Button */}
                                    <div>
                                        <p className="w-36 mt-2 py-2 bg-darkgray text-white text-center rounded-lg flex items-center gap-2 justify-center">
                                            <img src="info.svg" alt="Info" className="ml-1" />
                                            <p className="text-sm font-semibold mr-1">Review Check-In</p>
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p className="w-36 mt-2 py-2 bg-darkgray text-white text-center rounded-lg flex items-center gap-2 justify-center">
                                        <img src="info.svg" alt="Info" className="ml-1" />
                                        <p className="text-sm font-semibold mr-1 h-8 flex items-center">Review Details</p>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
