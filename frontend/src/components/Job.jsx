import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';


const Job = ({job}) => {
    // const jobId = "lsekdhjgdsnfvsdkjf";
    const navigate=useNavigate();
    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-gray-50 border border-gray-300 m-4'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'> {daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAflBMVEWBvAb/uggFpvDzUyXz8/P/tAAAnvD79///+fPz/v/zRAB9ugDy9//z9Pb29Pbzn47j7fPz5+Xq7uS01If604sAofDL3rTzPAB1tgCKyfG01/L07uT43rTzvrTzMAAAm/Dz1M7b58zzl4Su0Xvzxbx+xfH70H8Al/DM4vP25syqCRjsAAABaElEQVR4nO3c21KCYBiGUSrU3ICaZmqGttHq/m+wg4Ca6Kz5RmLWc8Rw8v7rBr4k7VBJ9ZGd8xV/q356Uv94COpQbuWPq6BqTY2ZF3chFU/Dz4XB8zqom7yBGV2FNJpWmMU4CQkGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgam5ZhiFFLxhVmPQ2pi0vk0qJcSk68WQTUx6TCqaiAfBFVZvmE6EExbg2lrHcVcR1UNZJOgGpfn0tlxE9JxW2qy3WkZ0un+5+W5dLbvh7Q/lpjJqRfUL5jby5D6mwqz7F2EBAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA9NyTNCpltdznGrJtkG9VQPvu6DSBuYf1zxv1IU+ALuS5QgVCP6mAAAAAElFTkSuQmCC" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost"> {job?.position} Positions</Badge>
                <Badge className={'text-[#597E52] font-bold'} variant="ghost">{job?.jobType}</Badge>
                <Badge className={'text-[#DD761C] font-bold'} variant="ghost">{job?.salary} LPA</Badge>
        
            </div>
            <div className='flex items-center gap-4 mt-4'>
            <Button  onClick={()=>navigate(`/description/${job._id}`)} className="bg-dark-blue text-light-background border  hover:bg-light-blue"
            >Details</Button>

                <Button   className="bg-dark-blue text-light-background border  hover:bg-light-blue "
                >Save For Later</Button>
            </div>
        </div>
    )
}
Job.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        position: PropTypes.number.isRequired,
        jobType: PropTypes.string.isRequired,
        salary: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired, // Validate `createdAt` as a string

    }).isRequired,
};

export default Job