interface SelectFieldProps{
    options: [string,string],
    reference?: any
}

export default function SelectField({options, reference}: SelectFieldProps){
    return(
        <select ref={reference} className="border-black border-2 rounded-md p-2 text-xl cursor-pointer">
            <option value="" selected disabled hidden>Choose Type</option>
            {options.map(x=><option value={x}>{x}</option>)};
        </select>
    )
}