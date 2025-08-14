import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom'



function Header() {
  const ProjectIntro = "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img className='rounded' width={'40px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgMVm7J615C3_5htZlhumJwpYDr8_rIATGiQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfX2HyrKgfVhy8jASRHH1qiQ1REVbR8eDYw&s" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to = {'/'} className='text-light text-decoration-none'> rBuilder </Link>
          </Typography>
          <Tooltip title={ProjectIntro} ><Button color="inherit">About Us</Button></Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header