import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BiSolidCartDownload } from "react-icons/bi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import Edit from './Edit'



function Preview() {
    return (
        <div >
            <Stack direction={'row'} sx={{ marginTop: '20px', justifyContent: 'flex-end' }}>
                <Stack direction={'row'}>
                    <button className='btn fs-1' style={{ color: 'red' }}><BiSolidCartDownload /></button>
                    <div>
                        <Edit />
                    </div>

                    <Link to={'/history'} className='btn fs-1'><MdOutlineHistoryToggleOff /></Link>

                    <Link to={'/resume'} className='btn fs-1'>Back</Link>
                </Stack>
            </Stack>
            <Box component="section" >

                <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
                    <h2>Name</h2>
                    <h6>Job Title</h6>
                    <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
                    <p>
                        <Link href={""}> Github </Link> |
                        <Link href={""}> Linkedin </Link> |
                        <Link href={""}> Portfolio </Link>
                    </p>
                    <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                    <p className='fs-5 text-start'>User Summary</p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                    <h5>User Education</h5>
                    <p><span>college</span> | <span>University</span> | <span>year</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                    <h5>User Job</h5>
                    <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
                    <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>

                    <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: "10px" }}>

                        <Button className='ms-3' variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>
                        <Button variant="contained">Contained</Button>


                    </Stack>
                </Paper>
            </Box>
        </div>
    )
}

export default Preview