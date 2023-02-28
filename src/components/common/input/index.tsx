import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    columnClasses?: string;
    error?: string;
    formatter?: (value: string) => string;
}

export const Input: React.FC<InputProps> = ({
    label,
    columnClasses,
    id,
    error,
    formatter,
    onChange,
    ...inputProps
}: InputProps) => {
    return (
        <div className={`field column ${columnClasses}` }>
        <label className="label" htmlFor={id}>{label}</label>
        <div className="control">
            <input className="input" 
                onChange={ event => {
                    if(onChange) {
                        onChange(event.target.value)
                    }
                }}

                id={id} {...inputProps} />
            {error &&
                <p className="help is-danger">{ error }</p>
            }
        </div>
    </div>
    )
}