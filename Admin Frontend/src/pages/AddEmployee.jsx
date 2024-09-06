import { Button } from "../Component/button"
import { Navbar } from "../Component/Navbar"
import { Inputbox2 } from "../Component/Inputbox2"
import { Sidebar } from "../Component/Sidebar"
export const AddEmployee = () => {
    return <div className="w-screen h-screen bg-home-right overflow-y-hidden">
        <Navbar />
        <div className="h-screen flex">
            <Sidebar />
            {/* Main Content Area */}
            <div>
                <div className="flex-1 p-8">
                    <div className="flex justify-between  ">
                        <h1 className="font-bold text-2xl mb-4 text-1stfont">Add New Employee</h1>
                    </div>
                </div>
                <div className="flex ">
                    {/* left */}
                    <div className="m-24 flex flex-col gap-5 items-center">
                        <img src="empPic.svg" alt="" />
                        <h1 className="text-2ndfont font-semibold text-xl">Add Employee Picture</h1>
                        <Button label={"Click To Select"} />
                    </div>
                    {/* Right */}
                    <div className="relative bottom-10">
                        <div className="flex gap-2">
                            <Inputbox2 label={"First Name"}  />
                            <Inputbox2 label={"Last Name"} />
                        </div>
                        <div className="">
                            <Inputbox2 label={"Employee Email"} width="500px" />
                            {/* <Inputbox2 label={"Employee Phone No"} width="500px" /> */}
                            <Inputbox2 label={"Employee Password"} width="500px" />
                            <Inputbox2 label={"Employee Role"} width="500px"/>
                            <Inputbox2 label={"Employee ID"} width="500px"/>
                            <Button label={"Add"} width="10rem"/>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
}