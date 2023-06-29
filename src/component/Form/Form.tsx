import React, { ReactNode } from 'react'

type Props = {
    formTitle?: string;
    formLable?: string;
    children?: ReactNode;
}

function Form(props: Props) {
    const { formTitle, children, formLable } = props;

    return (
            <div className='w-full max-w-xl min-h-max p-8 bg-white border rounded-md items-center'>
                <div className='w-full flex justify-between items-center'>
                    <h2 className='font-normal text-20 leading-7 text-dark'>{formTitle}</h2>
                    <label className='font-medium text-16 leading-5 text-dark'>{formLable}</label>
                </div>
                {children}
            </div>
    )
}

export default Form
