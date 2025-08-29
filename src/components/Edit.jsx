import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SiEditorconfig } from "react-icons/si";
import TextField from '@mui/material/TextField';
import { editResumeApi, getAResumeApi } from '../services/allApi';
import swal from 'sweetalert';



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
function Edit({ resumeId ,setUpdateUserInput}) {
    const [userSkill, setUserSkill] = React.useState("")
    const [userInput, setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);
    // console.log(resumeId);
    console.log(userInput);

    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])
    const getEditResumeDetails = async () => {
        try {
            const result = await getAResumeApi(resumeId)
            setUserInput(result?.data)
        } catch (error) {
            console.log(error);

        }
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = () => {
        if (userSkill) {

            if (userInput.skills.includes(userSkill)) {
                alert("Given skill is already existing")
            } else {
                setUserInput({ ...userInput, skills: [...userInput.skills, userSkill] })

            }
            setUserSkill('')
        }
    }

    const removeSkill = (skill) => {
        setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
    }
    const handleResumeUpdate = async ()=>{
        try {
            const result = await editResumeApi(userInput?.id,userInput)
            setUpdateUserInput(result?.data)
            swal('Success',"Resume Updates Sucessfully");
            handleClose()
        } catch (error) {
            console.log(error);
            
        }
    } 
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
                            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })} value={userInput?.personalData?.name} />
                            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} value={userInput?.personalData?.jobTitle} />
                            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} value={userInput?.personalData?.location} />

                        </div>
                        {/* contact details */}
                        <h3>Contact Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } })} value={userInput?.personalData?.email} />
                            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } })} value={userInput?.personalData?.phone} />
                            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } })} value={userInput?.personalData?.github} />
                            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value } })} value={userInput?.personalData?.linkedin} />
                            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } })} value={userInput?.personalData?.portfolio} />

                        </div>
                        {/* education details */}
                        <h3>Education Details</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-Course " label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } })} value={userInput?.educationData?.course} />
                            <TextField id="standard-basic-College " label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } })} value={userInput?.educationData?.college} />
                            <TextField id="standard-basic-University" label="University" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } })} value={userInput?.educationData?.university} />
                            <TextField id="standard-basic-year" label="Year Of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } })} value={userInput?.educationData?.year} />

                        </div>
                        {/* work exp */}
                        <h3>Work Experience</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput?.experience?.jobRole} />
                            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput?.experience?.company} />
                            <TextField id="standard-basic-Company location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput?.experience?.jobLocation} />
                            <TextField id="standard-basic-Company duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput?.experience?.duration} />


                        </div>

                        {/* skills */}
                        <h3>Skills</h3>
                        <div className='d-flex align-items-center justify-content-between  p-3'>
                            <TextField onChange={e => setUserSkill(e.target.value)} sx={{ width: '400px' }} id="standard-basic" label="Add Skill" variant="standard" />
                            <Button onClick={addSkill} variant="text">Add</Button>
                        </div>
                        <h6>Selected Skills</h6>
                        <div className='d-flex my-4 flex-wrap' >

                            {
                                userInput?.skills?.length > 0 &&
                                userInput?.skills?.map(item => (
                                    <span key={item} className='btn btn-outline-primary d-flex align-items-center justify-content-center m-2'>{item}
                                        <button onClick={()=>removeSkill(item)} className='text-light btn'>X</button>
                                    </span>

                                ))
                            }
                        </div>
                        {/* prof sum */}
                        <h3>Professional Summary</h3>
                        <div className='d-flex row p-3'>
                            <TextField id="standard-basic" label="Write a short summary of yourself" multiline rows={4} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput?.summary} />
                        </div>
                    </Typography>
                    <button onClick={handleResumeUpdate}>Update</button>
                </Box>
            </Modal > ``
        </div >

    )
}

export default Edit