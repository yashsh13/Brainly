interface InputFieldProps {
    placeholderValue: string,
    reference?: any
}

export default function InputField({placeholderValue, reference}: InputFieldProps){
    return (
        <input ref={reference} type="text" className="w-md text-xl p-2 border-2 border-black rounded-md" placeholder={placeholderValue} />
    )
}