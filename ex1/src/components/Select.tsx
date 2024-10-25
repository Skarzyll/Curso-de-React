interface option {
    id: string,
    name: string
}

interface SelectProps {
    nomelabel: string,
    name: string,
    options: option[],
    value: string,
    handleonchange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

export default function Select({nomelabel, name, options, handleonchange, value} : SelectProps) {

    return(
        <label htmlFor={name}>
            {nomelabel}
            <select name={name} id={name} onChange={handleonchange} value={value} className="m-2" >
                <option disabled selected>Selecione a categoria</option>
                {options.map((option) => (
                    <option value={option.id} id={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))};
            </select>
        </label>
    )
}