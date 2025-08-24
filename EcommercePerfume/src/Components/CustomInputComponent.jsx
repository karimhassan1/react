

function CustomInputComponent({ label, onChange, }) {
    return (
        <div className="mb-3">
            <label htmlFor={label} className="mb-1 c-color-primary">{label}</label>
            <input type="text" id={label} className="c-border-primary"
                onChange={onChange}
            />

        </div>
    )
}

export default CustomInputComponent;