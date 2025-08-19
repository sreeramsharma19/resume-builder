import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
      <div >
        <h1 className='text-center my-5 '>Resume Downloaded History</h1>
        <Link to={'/'} style={{marginTop:'-80px'}} className='float-end me-5'>BACK</Link>
      </div>
       <Box component="section" className='container-fluid'>

                <div className='row'>
                  
                 <div className='col-md-4'>
                    <Paper elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
                     <div className='d-flex align-items-center justify-content-evenly'>
                        <h6>Review At : <br /> 24/6/2025 , 7:25pm</h6>
                        <button className='btn  fs-4 ms-5'><MdDelete /></button>
                     </div>
                       <div className='border rounded p-3'>
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
                       </div>
                    </Paper>
                 </div>
                </div>
            </Box>
    </div>
  )
}

export default History