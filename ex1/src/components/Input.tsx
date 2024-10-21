interface InputProps {
    nomelabel: string,
    type: string,
    name: string,
    id: string,
    placeholder: string,
    handlechange: (Event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export default function Input({nomelabel, type, name, id, placeholder, handlechange, value} : InputProps) {
    return(
        <>
            <label>
                {nomelabel}:
                <input type={type} name={name} id={id} placeholder={placeholder} onChange={handlechange} value={value} className="m-2" />
            </label><br />
        </>
    )
}