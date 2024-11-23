import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import Footer from './shared/Footer'

const AppliedJobTable = () => {
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
                        [1, 2, 3, 4].length <= 0 ? <span>You havent applied any job yet.</span> : [1, 2, 3, 4].map((key, index) => (
                            <TableRow
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-[#D8CCA3]' : 'bg-[#B09B71]'
                                    } text-dark-blue border border-gray-300`}
                            >                                
                                <TableCell className="border border-[#1C0A00]">21-11-2024</TableCell>
                                <TableCell className="border border-[#1C0A00]">Frontend Developer</TableCell>
                                <TableCell className="border border-[#1C0A00]">Microsoft</TableCell>

                                <TableCell className="border border-[#1C0A00] text-right"><Badge className="text-right">Selected</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <Footer/>
        </div>
    )
}

export default AppliedJobTable