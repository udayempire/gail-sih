export function Button({label , width = "20rem"}) {
    return <button className="p-3 w-80 bg-maroon hover:bg-maroon-light rounded-3xl text-white font-semibold my-4" style={{width}}>
        {label}
    </button>
}