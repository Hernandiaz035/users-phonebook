import './Input.css'

const Input = ({ label, ...inputProps }) => {
    return (
        <div className="field">
            <label htmlFor={inputProps.name}>
                {label}
            </label>
            <input {...inputProps} />
        </div>
    )
}

export default Input
