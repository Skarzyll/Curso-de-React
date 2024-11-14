export default function Select({nomelabel, useonchange, name, value}) {

    return(
        <label htmlFor={name}>
            {nomelabel}
            <select name={name} onChange={useonchange} id={name} value={value} className="m-2" >
                <option value="Selecione a categoria">Selecione a categoria</option>
                <option value="infra">infra</option>
                <option value="desenvolvimento">desenvolvimento</option>
                <option value="design">design</option>
                <option value="planejamento">planejamento</option>
            </select>
        </label>
    )
}