import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import Footer from './shared/Footer'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);
    return (
        <div>
            <Table className="border border-[#1C0A00] rounded-md">
                <TableCaption>Details of Applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="border border-[#1C0A00] bg-[#493628] text-light-background font-bold">Date</TableHead>
                        <TableHead className="border border-[#1C0A00] bg-[#493628] text-light-background font-bold">Job Role</TableHead>
                        <TableHead className="border border-[#1C0A00] bg-[#493628] text-light-background font-bold">Company</TableHead>
                        <TableHead className="border border-[#1C0A00] bg-[#493628] text-light-background font-bold text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        allAppliedJobs.length <= 0 
                            ? <span>You havent applied to any jobs yet.</span> 
                            : allAppliedJobs.map((appliedJob) => (
                                <TableRow key={appliedJob?._id}>
                                    <TableCell className="border border-[#1C0A00]">{appliedJob?.createdAt?.split("T")[0]}</TableCell>
                                    <TableCell className="border border-[#1C0A00]">{appliedJob.job?.title || "N/A"}</TableCell>
                                    <TableCell className="border border-[#1C0A00]">{appliedJob.job?.company?.name || "N/A"}</TableCell>
                                    <TableCell className="border border-[#1C0A00] text-right">
                                        <Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-400' : appliedJob?.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>
                                            {(appliedJob?.status || "Unknown").toUpperCase()}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                    }
                </TableBody>
            </Table>
            <Footer />
        </div>
    )
}

export default AppliedJobTable;
