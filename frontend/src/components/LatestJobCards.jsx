import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
    return (
        <div className='  p-5 rounded-md shadow-xl text-dark-blue bg-gray-50 border border-light-blue cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg text-dark-blue'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, eveniet!</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost"> 10 Positions</Badge>
                <Badge className={'text-[#597E52] font-bold'} variant="ghost">Full Time</Badge>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost">12 LPA</Badge>
            </div>
        
        </div>
    )
}

export default LatestJobCards