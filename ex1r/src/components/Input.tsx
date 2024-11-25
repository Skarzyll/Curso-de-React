export default function Input( {nomelabel, type, name, useonchange, id, placeholder, value} ) {
    return(
        <>
            <label>
                {nomelabel}:
                <input type={type} onChange={useonchange} name={name} id={id} placeholder={placeholder} value={value} required className="m-2" />
            </label><br />
        </>
    )
}