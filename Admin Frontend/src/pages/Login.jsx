import { Inputbox } from "../Component/Inputbox"
import { Button } from "../Component/button"
import { Link } from "react-router-dom"
export const Login = () => {
    return <div className="w-screen rounded-md h-screen drop-shadow-2xl flex justify-center items-center  bg-light-white ">
        <div className="">
            <div className="flex  justify-center items-center gap-4  bg-white">
                <div className="h-[27rem] flex flex-col justify-center">
                    <img src="Gailsvg.svg"  alt="" className="mx-auto drop-shadow-2xl" />
                </div>
                <div className="mx-10 ">
                    <h1 className="font-semibold text-2xl mb-8">Sign In</h1>
                    <div className="flex flex-col gap-3">
                        <Inputbox label={"Username"} type={"text"} />
                        <Inputbox label={"Password"} type={"password"} />
                        <Link to="/">
                        <Button label={"Sign In"}/>
                        </Link>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <input type="checkbox" className="transform scale-150" />
                                <p className="font-semibold">Remember Me</p>
                            </div>
                            <Link to="/Home" className="font-semibold text-blue-700">
                                    Forgot Password ?
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
}