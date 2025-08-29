import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BiSolidCartDownload } from "react-icons/bi";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import Edit from './Edit'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { addResumeDownloadAPI } from '../services/allApi';

function Preview({ userInput, setUserInput, finish, resumeId }) {
  
  const [downloadStatus, setDownloadStatus] = useState(false);

    

  const downloadCV = async () => {
    const input = document.getElementById('previewResult');
    const canva = await html2canvas(input, { scale: 2 });
    const imgURL = canva.toDataURL('image/png');

    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');

    // get date 
    const localTimeDate = new Date();
    const timeStamp = `${localTimeDate.toLocaleDateString()}, ${localTimeDate.toLocaleTimeString()}`;

    // add download CV to json using API call
    try {
      const result = await addResumeDownloadAPI({ ...userInput, imgURL, timeStamp });
      console.log(result);
      setDownloadStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-column">
      {userInput.personalData.name !== '' && (
        <>
          {finish && (
            <Stack direction="row" sx={{ marginTop: '40px', justifyContent: 'flex-end' }}>
              <Stack direction="row">
                <button onClick={downloadCV} className="btn fs-1" style={{ color: 'red' }}>
                  <BiSolidCartDownload />
                </button>
                <div>
                  <Edit setUpdateUserInput={setUserInput} resumeId={resumeId} />
                </div>
                {downloadStatus && (
                  <Link to={'/history'} className="btn fs-1">
                    <MdOutlineHistoryToggleOff />
                  </Link>
                )}
                <Link to={'/resume'} className="btn fs-1">Back</Link>
              </Stack>
            </Stack>
          )}

          <Box component="section">
            <Paper id="previewResult" elevation={3} sx={{ my: 5, p: 2, textAlign: 'center' }}>
              <h2>{userInput.personalData.name}</h2>
              <h6>{userInput.personalData.jobTitle}</h6>
              <p>
                <span>{userInput.personalData.location}</span> | 
                <span>{userInput.personalData.email}</span> | 
                <span>{userInput.personalData.phone}</span>
              </p>
              <p>
                <a href={userInput.personalData.github} target="_blank" rel="noopener noreferrer">Github</a> | 
                <a href={userInput.personalData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
                <a href={userInput.personalData.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
              </p>

              <Divider sx={{ fontSize: '25px' }}>Summary</Divider>
              <p className="fs-5 text-start">{userInput.summary}</p>

              <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Education</Divider>
              <h5>{userInput.educationData.course}</h5>
              <p>
                <span>{userInput.educationData.college}</span> | 
                <span>{userInput.educationData.university}</span> | 
                <span>{userInput.educationData.year}</span>
              </p>

              <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Professional Experience</Divider>
              <h5>{userInput.experience.jobRole}</h5>
              <p>
                <span>{userInput.experience.company}</span> | 
                <span>{userInput.experience.jobLocation}</span> | 
                <span>{userInput.experience.duration}</span>
              </p>

              <Divider sx={{ fontSize: '25px', marginBottom: '10px' }}>Skills</Divider>
              <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: "10px" }}>
                {userInput.skills?.map((skill, index) => (
                  <Button key={index} variant="contained">{skill}</Button>
                ))}
              </Stack>
            </Paper>
          </Box>
        </>
      )}
    </div>
  );
}

export default Preview;
