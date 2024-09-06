export function Inputbox2({ label, type, width = '244px' }) {
    console.log(type, label);
    return (
        <div>
            <h3 className="m-2 font-bold">
                {label}
            </h3>
            <input
                type={type}
                className="border-black bg-graydeep border-solid rounded-lg p-3 focus:outline-none"
                style={{ width }} // Dynamically set the width
            />
        </div>
    );
}
