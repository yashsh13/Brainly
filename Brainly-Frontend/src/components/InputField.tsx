export default function InputField({placeholder}: {placeholder: string}){
    return (
        <input type="text" className="w-md text-xl p-2 border-2 border-black rounded-md" placeholder={placeholder} />
    )
}