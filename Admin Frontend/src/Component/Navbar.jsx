import { Button } from "./Button"
export function Navbar(){
    return <div>
        <div className="p-2 px-8 w-screen bg-white flex justify-between z-50 h-18">
            <img src="gtrack-nav.svg" alt="" className="relative left-36" />
            <Button label={"Download App"}/>

        </div>
    </div>
}