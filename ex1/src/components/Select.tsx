interface option {
    id: string,
    name: string
}

interface SelectProps {
    nomelabel: string,
    name: string,
    options: option[],
    /* handlechange: (Event: React.ChangeEvent<HTMLInputElement>) => void, */
}

export default function Select({nomelabel, name, options} : SelectProps) {
    return(
        <label htmlFor={name}>
            {nomelabel}
            <select name={name} id={name} className="m-2" >
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