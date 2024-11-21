import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    const jobId = "lsekdhjgdsnfvsdkjf";

    
    return (
        <div className='p-5 rounded-md shadow-xl bg-gray-50 border border-gray-300 m-4'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'> 2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAflBMVEWBvAb/uggFpvDzUyXz8/P/tAAAnvD79///+fPz/v/zRAB9ugDy9//z9Pb29Pbzn47j7fPz5+Xq7uS01If604sAofDL3rTzPAB1tgCKyfG01/L07uT43rTzvrTzMAAAm/Dz1M7b58zzl4Su0Xvzxbx+xfH70H8Al/DM4vP25syqCRjsAAABaElEQVR4nO3c21KCYBiGUSrU3ICaZmqGttHq/m+wg4Ca6Kz5RmLWc8Rw8v7rBr4k7VBJ9ZGd8xV/q356Uv94COpQbuWPq6BqTY2ZF3chFU/Dz4XB8zqom7yBGV2FNJpWmMU4CQkGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgam5ZhiFFLxhVmPQ2pi0vk0qJcSk68WQTUx6TCqaiAfBFVZvmE6EExbg2lrHcVcR1UNZJOgGpfn0tlxE9JxW2qy3WkZ0un+5+W5dLbvh7Q/lpjJqRfUL5jby5D6mwqz7F2EBAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA9NyTNCpltdznGrJtkG9VQPvu6DSBuYf1zxv1IU+ALuS5QgVCP6mAAAAAElFTkSuQmCC" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, deserunt?</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost"> 10 Positions</Badge>
                <Badge className={'text-[#597E52] font-bold'} variant="ghost">Full Time</Badge>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost">12 LPA</Badge>
        
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button className="bg-dark-blue text-light-background">Save For Later</Button>
            </div>
        </div>
    )
}

export default Job