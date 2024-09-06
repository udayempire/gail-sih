import { recentActivity } from "../Data/recent_activity"

export function Recentbar() {
    return (
        <div className="h-[31rem] my-4 overflow-y-scroll"> {/* Set height and overflow here */}
            <div className="flex flex-col gap-3 py-4">
                {recentActivity.map((data, index) => (
                    <div key={index} className="flex justify-around items-center bg-gray mx-3 p-2 py-4 font-semibold rounded-md  hover:bg-light-blue2">
                        <div className="flex gap-3 items-center">
                            <div className="bg-red-800 w-1 h-14 rounded-md"></div>
                            <div className="bg-light-blue text-blue-600 font-bold rounded-full w-14 h-14 p-4">
                                {`${data.employeeFname[0]}${data.employeeLname[0]}`}
                            </div>
                            <div>{`${data.employeeFname} ${data.employeeLname}`}</div>
                        </div>
                        <div className="flex gap-[110px] items-center">
                            <div className="relative right-2">{data.inTime}</div>
                            <div className="relative left-1">{data.outTime}</div>
                            <div className="relative left-8">{data.workHour}</div>
                            <div className="w-48">{data.lastLocation}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
