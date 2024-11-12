export default function Select({nomelabel, name, handleonchange, value}) {

    return(
        <label htmlFor={name}>
            {nomelabel}
            <select name={name} id={name} onChange={handleonchange} value={value} className="m-2" >
                <option disabled selected>Selecione a categoria</option>
                <option value="infra">infra</option>
                <option value="desenvolvimento">desenvolvimento</option>
                <option value="design">design</option>
                <option value="planejamento">planejamento</option>
            </select>
        </label>
    )
}