

function CustomInputComponent({ label, onChange, }) {
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type="text"
                onChange={onChange}
            />

        </>
    )
}

export default CustomInputComponent;