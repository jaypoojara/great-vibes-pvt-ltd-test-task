import React, { ReactNode } from 'react'
import StyledButton, { BtnType } from '../StyledButton/StyledButton';
import NetLogo from '../../assets/images/NetLogo.svg';
import { JobList } from '../../container/CreateJobContainer/CreateJobContainer';

type Props = {
    jobListItem: JobList;
    handleApply: () => void;
}
function JobCard(props: Props) {

    const { jobListItem, handleApply } = props;

    return (
        <div className='flex lg:w-5/12 max-w-3xl min-h-max px-6 py-4 gap-2 bg-white border rounded-lg'>
            <img className='w-12 h-12' src={NetLogo} alt='' />
            <div className='flex flex-col'>
                <span className='font-normal text-24 leading-8'>{jobListItem?.jobTitle}</span>
                <span className='font-normal text-16 leading-6'>{`${jobListItem?.companyName} - ${jobListItem?.industry}`}</span>
                <span className='font-normal text-16 leading-6 text-placeHolder'>{`${jobListItem?.location} (${jobListItem?.remoteType})`}</span>

                <div className='my-6 flex flex-col gap-2 text-16 font-normal'>
                <span>{`Part-Time (${jobListItem?.time} IST)`}</span>
                <span>{`Experience (${jobListItem?.experience?.min} - ${jobListItem?.experience?.max} years)`}</span>
                <span>{`INR (₹) (${jobListItem?.salary?.min} - ${jobListItem?.salary?.max} / Month)`}</span>
                <span>{`${jobListItem?.totalEmployee} employees`}</span>
                </div>
                <StyledButton type={jobListItem?.applyType === 'Apply Now' ? BtnType.PRIMARY : BtnType.SECONDARY} onClick={() => handleApply()} text={jobListItem?.applyType} wrapperClass='justify-start' buttonClass='text-sm rounded-md px-1 py-2' />
            </div>
        </div>
    )
}

export default JobCard
