interface SelectProps {
    nomelabel: string,
    name: string,
    id: string,
    options: string,
    handlechange: (Event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string,
}

export default function Select({nomelabel, name, id, options, handlechange, value} : SelectProps) {
    return(
        <label htmlFor={name}>
            {nomelabel}
            <select id={id} className="m-2" >
                <option disabled selected>Selecione a categoria</option>
            </select>
        </label>
    )
}