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



function Preview({userInput}) {
    console.log(userInput);
    
    return (
        < >
           { 
           userInput.personalData.name!=''&&
           <>
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
                        <h2>{userInput.personalData.name}</h2>
                        <h6>{userInput.personalData.jobTitle}</h6>
                        <p><span>{userInput.personalData.location}</span> | <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span></p>
                        <p>
                            <Link href={userInput.personalData.github}> Github </Link> |
                            <Link href={userInput.personalData.linkedin}> Linkedin </Link> |
                            <Link href={userInput.personalData.portfolio}> Portfolio </Link>
                        </p>
                        <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
                        <p className='fs-5 text-start'>{userInput.summary}</p>
                        <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
                        <h5>{userInput.educationData.course}</h5>
                        <p><span>{userInput.educationData.college}</span> | <span>{userInput.educationData.university}</span> | <span>{userInput.educationData.year}</span></p>
                        <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
                        <h5>{userInput.experience.jobRole}</h5>
                        <p><span>{userInput.experience.company}</span> | <span>{userInput.experience.jobLocation}</span> | <span>{userInput.experience.duration}</span></p>
                        <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
    
                        <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: "10px" }}>
    
                           {userInput.skills?.map(skill=>(
                            <Button variant='contained'>{skill}</Button>
                           ))}
    
    
                        </Stack>
                    </Paper>
                </Box>
           </>
            }
        </>
    )
}

export default Preview