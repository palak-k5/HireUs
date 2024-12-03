import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes


const LatestJobCards = ({job}) => {
    const navigate = useNavigate();

    return (
        <div onClick={()=> navigate(`/description/${job._id}`)} className='  p-5 rounded-md shadow-xl text-dark-blue bg-gray-50 border border-light-blue cursor-pointer'>
            <div>
                <h1 className='font-medium text-lg text-dark-blue'>{job?.company?.name}</h1>
                <p className='text-sm text-gray-500'>India</p>
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
        
        </div>
    )
}
LatestJobCards.propTypes = {
    job: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        jobType: PropTypes.string,
        salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired, // Ensure the job prop is required
};

export default LatestJobCards