import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SiEditorconfig } from "react-icons/si";
import TextField from '@mui/material/TextField';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (

        <div>
            <button onClick={handleOpen} className='btn fs-1'>   <SiEditorconfig /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal details */}
                        <h3>Personal Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" />
                            <TextField id="standard-basic-location" label="Location" variant="standard" />

                        </div>
                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-mail" label="Email" variant="standard" />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />

                        </div>
                        {/* education details */}
                        <h3>Education Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-Course " label="Course Name" variant="standard" />
                            <TextField id="standard-basic-College " label="College Name" variant="standard" />
                            <TextField id="standard-basic-University" label="University" variant="standard" />
                            <TextField id="standard-basic-year" label="Year Of Passout" variant="standard" />

                        </div>
                        {/* work exp */}
                        <h3>Work Experience</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" />
                            <TextField id="standard-basic-Company location" label="Location" variant="standard" />
                            <TextField id="standard-basic-Company duration" label="Duration" variant="standard" />

                        </div>

                        {/* skills */}
                        <div className='d-flex align-items-center justify-content-between p-3'>
                            <TextField sx={{ width: '400px' }} id="standard-basic-skill" label="Add Skill" variant="standard" />
                            <Button variant="text">ADD</Button>
                        </div>
                        <h5>Added Skills :</h5>
                        <div className="d-flex flex-wrap justify-content-between my-3">
                            {/* span must duplicate according to user adding skill. */}
                            <span className='btn btn-primary'>React <button className='text-light btn'>X</button> </span>
                        </div>
                        {/* prof sum */}
                        <h3>Professional Summary</h3>
                        <div className='d-flex row p-3'>

                            <TextField id="standard-basic-name" label="Write a short summary of yourself" multiline rows={4} defaultValue={"Results-driven [Your Profession] with [X] years of experience in [Industry/Key Skills]. Proven track record in [Key Achievement or Responsibility]. Strong skills in [Relevant Skills]. Passionate about [Key Professional Goal or Value]. Seeking to leverage expertise in [Target Role/Industry] to drive success."} variant="standard" />


                        </div>
                    </Typography>
                    <button>Update</button>
                </Box>
            </Modal>``
        </div>

    )
}

export default Edit