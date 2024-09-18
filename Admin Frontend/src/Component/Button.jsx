export function Button({label , width = "20rem",onClick}) {
    return <button className="p-3 w-80 bg-dark-blue hover:bg-maroon-light rounded-3xl text-white font-semibold my-4" style={{width}} onClick={onClick}>
        {label}
    </button>
}