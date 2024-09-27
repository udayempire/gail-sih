import { Button } from "../Component/Button"
import { Navbar } from "../Component/Navbar"
import { Inputbox2 } from "../Component/Inputbox2"
import { Inputbox } from "../Component/Inputbox"
import { Sidebar } from "../Component/Sidebar"
export const UpdateEmployee = () => {
    return <div className="w-screen h-screen bg-home-right overflow-y-hidden">
        <Navbar />
        <div className="h-screen flex">
            <Sidebar />
            {/* Main Content Area */}
            <div>
                <div className="flex-1 p-8">
                    <div className="flex flex-col justify-between items-center space-y-6"> {/* Added vertical spacing */}
                        <h1 className="font-bold text-2xl mb-4 text-1stfont">Update Employee Details</h1>
                        <div className="flex items-center space-x-4"> {/* Added horizontal spacing */}
                            <div className="font-semibold text-2xl">Enter Employee ID:</div>
                            <Inputbox type={"text"}  color="#E4D3C9" />
                            <Button label={"Search"} width={"13rem"} />
                        </div>
                <img src="line.svg" alt="" className="" />
                    </div>

                </div>
                <div className="flex relative bottom-28 ">
                    {/* left */}
                    <div className="m-24 flex flex-col gap-5 items-center">
                        <img src="empPic.svg" alt="" />
                        <h1 className="text-2ndfont font-semibold text-xl">Add Employee Picture</h1>
                        <Button label={"Click To Select"} />
                    </div>
                    {/* Right */}
                    <div className="relative top-[6rem] ">
                        <div className="flex flex-col gap-3">
                            <Inputbox2 label={"Employee Email"} width="500px" />
                            {/* <Inputbox2 label={"Employee Phone No"} width="500px" /> */}
                            <Inputbox2 label={"Update Password"} width="500px" />
                            <Inputbox2 label={"Employee Role"} width="500px" />
                            <Button label={"Update"}  className="relative space-y-9"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
}