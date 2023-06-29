import StyledButton, { BtnType } from '../StyledButton/StyledButton';
import NetLogo from '../../assets/images/NetLogo.svg';
import { JobList } from '../../container/CreateJobContainer/CreateJobContainer';

type Props = {
    jobListItem: JobList;
    handleApply: () => void;
}
function JobCard(props: Props) {

    const { jobListItem, handleApply } = props;
    const btnType = jobListItem?.applyType === 'Apply Now' ? BtnType.PRIMARY : BtnType.SECONDARY;
    const renderJobTime = `Part-Time (${jobListItem?.time} IST)`;
    const renderExperience = `Experience (${jobListItem?.experience?.min} - ${jobListItem?.experience?.max} years)`;
    const renderSalary = `INR (₹) (${jobListItem?.salary?.min} - ${jobListItem?.salary?.max} / Month)`;
    const renderEmployee = `${jobListItem?.totalEmployee} employees`;

    return (
        <div className='flex lg:w-5/12 max-w-3xl min-h-max px-6 py-4 gap-2 bg-white border rounded-lg'>
            <img className='w-12 h-12' src={NetLogo} alt='' />
            <div className='flex flex-col'>
                <span className='font-normal text-24 leading-8'>{jobListItem?.jobTitle}</span>
                <span className='font-normal text-16 leading-6'>{`${jobListItem?.companyName} - ${jobListItem?.industry}`}</span>
                <span className='font-normal text-16 leading-6 text-placeHolder'>{`${jobListItem?.location} (${jobListItem?.remoteType})`}</span>

                <div className='my-6 flex flex-col gap-2 text-16 font-normal'>
                    <span>{renderJobTime}</span>
                    <span>{renderExperience}</span>
                    <span>{renderSalary}</span>
                    <span>{renderEmployee}</span>
                </div>
                <StyledButton type={btnType} onClick={() => handleApply()} text={jobListItem?.applyType} wrapperClass='justify-start' buttonClass='text-sm rounded-md px-1 py-2' />
            </div>
        </div>
    )
}

export default JobCard
