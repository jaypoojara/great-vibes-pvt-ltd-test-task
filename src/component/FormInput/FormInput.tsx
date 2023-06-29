
type Props = {
    label?: string;
    placeholder?: string;
    wrapperClass?:string;
    inputClass?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export default function FormInput(props: Props) {

    const { label, placeholder, wrapperClass, inputClass, value, onChange } = props;
    const inputWrapper = `${wrapperClass ? wrapperClass : 'w-full flex flex-col mt-6'}`
    const inputFieldClass = `${inputClass ? inputClass : 'w-full flex px-2 py-1 border rounded-md mt-1 outline-none placeholder:text-14 placeholder:text-placeHolder leading-7'}`

    return (
        <div className={inputWrapper} >
            <label className='font-medium text-14 text-dark'>{label}</label>
            <input value={value} onChange={(e) => onChange && onChange(e.target.value)} type='text' placeholder={placeholder} className={inputFieldClass} />
        </div>
    )
}
