type Items = {
    label: string;
    value: string;
}

type Props = {
    title?: string;
    items: Items[];
    value: string;
    onChange: (detail: string) => void;
}

function RadioGroup(props: Props) {

    const { title, items, value, onChange } = props;

    return (
        <div className='flex flex-col mt-4 text-14'>
            <label className='font-medium text-dark'>{title}</label>
            <div className='flex items-center gap-4 mt-1'>
                {
                    items.map((item, index) => (
                        <div key={index} className='flex items-center gap-1'>
                            <input id={`${index}`} type='radio' className='cursor-pointer' checked={item?.value === value} onChange={() => onChange(item?.value)} />
                            <label className=' text-placeHolder' htmlFor={`${index}`}>{item?.label}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RadioGroup
