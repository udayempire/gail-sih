import { Button } from "./Button";

export function Navbar() {
    return (
        <div>
            <div className="p-[-1.25px] px-8 w-screen bg-white flex justify-between z-50 h-18">
                <img src="gtrack-nav.svg" alt="" className="relative left-36" />
                <a href="/gtrrack.apk" download>
                    <Button label={"Download App"} />
                </a>
            </div>
        </div>
    );
}
