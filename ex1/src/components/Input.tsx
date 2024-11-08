export default function Input( {nomelabel, type, name, id, placeholder, handleonchange, value} ) {
    return(
        <>
            <label>
                {nomelabel}:
                <input type={type} name={name} id={id} placeholder={placeholder} onChange={handleonchange} value={value} minLength={8} maxLength={20} className="m-2" />
            </label><br />
        </>
    )
}