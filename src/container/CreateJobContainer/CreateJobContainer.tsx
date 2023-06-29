import { useState } from 'react';
import FormInput from '../../component/FormInput/FormInput';
import StyledButton, { BtnType } from '../../component/StyledButton/StyledButton';
import Form from '../../component/Form/Form';
import JobCard from '../../component/JobCard/JobCard';
import RadioGroup from '../../component/RadioGroup/RadioGroup';

export type JobList = {
    id: string;
    jobTitle: string;
    companyName: string;
    industry: string;
    location: string;
    remoteType: string;
    time: string;
    experience: {
        min: string;
        max: string;
    },
    salary: {
        min: string;
        max: string;
    },
    totalEmployee: string;
    applyType: string;
}
const jobList: JobList[] = [
    {
        id: "1",
        jobTitle: "UX UI Designer",
        companyName: "Great Vibes",
        industry: "Information Technology",
        location: "Chennai, Tamilnadu, India",
        remoteType: "In-office",
        time: "9.00 am - 5.00 pm",
        experience: {
            min: "1",
            max: "2",
        },
        salary: {
            min: "30,000",
            max: "60,000",
        },
        totalEmployee: "51-200",
        applyType: "Apply Now",
    },
    {
        id: "2",
        jobTitle: "Developer",
        companyName: "Great Vibes",
        industry: "Information Technology",
        location: "Chennai, Tamilnadu, India",
        remoteType: "In-office",
        time: "9.00 am - 5.00 pm",
        experience: {
            min: "1",
            max: "2",
        },
        salary: {
            min: "50,000",
            max: "70,000",
        },
        totalEmployee: "51-200",
        applyType: "External apply",
    },
    {
        id: "3",
        jobTitle: "Interaction Designer",
        companyName: "Great Vibes",
        industry: "Information Technology",
        location: "Chennai, Tamilnadu, India",
        remoteType: "In-office",
        time: "9.00 am - 5.00 pm",
        experience: {
            min: "1",
            max: "2",
        },
        salary: {
            min: "30,000",
            max: "50,000",
        },
        totalEmployee: "51-200",
        applyType: "External apply",
    },
    {
        id: "4",
        jobTitle: "UX UI Designer",
        companyName: "Great Vibes",
        industry: "Information Technology",
        location: "Chennai, Tamilnadu, India",
        remoteType: "In-office",
        time: "9.00 am - 5.00 pm",
        experience: {
            min: "1",
            max: "2",
        },
        salary: {
            min: "30,000",
            max: "50,000",
        },
        totalEmployee: "51-200",
        applyType: "Apply Now",
    },

];
export default function CreateJobContainer() {

    const steps = [1, 2];
    const [value, setValue] = useState<string>("");
    const [currentStep, setCurrentStep] = useState<number>(1);

    const handleNext = () => {
        if (currentStep !== steps.length) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handleApply = () => { }

    const renderStepperForm = () => {
        if(currentStep === 1) {
            return (
                <>
                        <FormInput label='Job title' placeholder='ex. UX UI Designer' />
                        <FormInput label='Company name' placeholder='ex. Google' />
                        <FormInput label='Industry' placeholder='ex. Information Technology' />
                        <div className='flex justify-between gap-6'>
                            <FormInput label='Location' placeholder='ex. Chennai' />
                            <FormInput label='Remote type' placeholder='ex. In-office' />
                        </div>
                    </>
            )
        }
        return (
            <>
                        <div className='flex items-end justify-between gap-6'>
                            <FormInput label='Experience' placeholder='Minimum' />
                            <FormInput placeholder='Maximum' />
                        </div>
                        <div className='flex items-end justify-between gap-6'>
                            <FormInput label='Salary' placeholder='Minimum' />
                            <FormInput placeholder='Maximum' />
                        </div>
                        <FormInput label='Total employee' placeholder='ex. 100' />
                        <RadioGroup
                            title={'Apply Type'}
                            onChange={(detail) => setValue(detail)}
                            value={value}
                            items={[
                                { label: "Quick apply", value: "Quick apply" },
                                { label: "External apply", value: "External apply" }
                            ]}
                        />
                    </>
        )
    }

    return (
        <div className='flex flex-col w-full items-center py-14'>
            <Form formTitle="Create a job" formLable={`Step ${currentStep}`}>
                {renderStepperForm()}
                <StyledButton type={BtnType.PRIMARY} onClick={() => handleNext()} text={currentStep === steps.length ? "Save" : "Next"} wrapperClass='justify-end' buttonClass='text-sm rounded-md px-1 py-2 mt-24' />
            </Form>

            <div className='flex flex-row w-full justify-center flex-wrap gap-20 mt-20'>
                {jobList.length > 0 &&
                    jobList.map((jobListItem: JobList) => (
                        <JobCard key={jobListItem?.id} jobListItem={jobListItem} handleApply={handleApply} />
                    ))
                }
            </div>
        </div>
    )
}
