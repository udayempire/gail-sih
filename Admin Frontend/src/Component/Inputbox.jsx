export function Inputbox ({label,type}){
    console.log(type,label)
    return <div>
        <h3 className="m-2 font-bold">
            {label}
        </h3>
        <input type={type} className="border-black bg-gray  border-solid rounded-3xl p-3 px-6 w-80 bg-gray-200 focus:outline-none" />
    </div>
}