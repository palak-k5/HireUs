import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { toast } from 'sonner';

const JobDescription = () => {
   const isApplied=false;
    
    return (
        <div className=' max-w-5xl mx-auto my-44  border-dark-blue bg-gray-50 p-5 rounded-lg border'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost"> 10 Positions</Badge>
                <Badge className={'text-[#597E52] font-bold'} variant="ghost">Full Time</Badge>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost">12 LPA</Badge>
        
            </div>
                </div>
                <Button
                    disabled={isApplied}
                    className={`rounded-lg ${isApplied ? 'bg-[#B89068] text-dark-blue cursor-not-allowed' : 'bg-light-blue hover:bg-[#1E212D]'}`}>
                    {isApplied ? 'Already Applied' : 'Apply Now'}
                </Button>
            </div>
            <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Title</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Location</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, laboriosam!</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>3 yrs</span></h1>
                <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>14</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>24-11-2024</span></h1>
            </div>
        </div>
    )
}

export default JobDescription