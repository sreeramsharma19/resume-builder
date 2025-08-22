import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { buttonBaseClasses } from '@mui/material';
import swal from 'sweetalert';
import { addResumeApi } from '../services/allApi';

const steps = ['Basic Informations', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function Steps({ userInput, setUserInput,setFinish}) {

  const skillSuggestionArray = ['NODE JS', 'EXPRESS', 'MONGO DB', 'REACT JS', 'ANGULAR', 'HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // state for storing user input data

  const userSkillRef = React.useRef()


  console.log(userInput);

  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  // add skill
  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert("Given skill is already existing")
      } else {
        setUserInput({ ...userInput, skills: [...userInput.skills, inputSkill] })
      }
    }
  }

  // remove skill

  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter(item => item != skill) })
  }

  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })} value={userInput.personalData.name} />
            <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })} value={userInput.personalData.jobTitle} />
            <TextField id="standard-basic-location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })} value={userInput.personalData.location} />

          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } })} value={userInput.personalData.email} />
            <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } })} value={userInput.personalData.phone} />
            <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } })} value={userInput.personalData.github} />
            <TextField id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value } })} value={userInput.personalData.linkedin} />
            <TextField id="standard-basic-portfolio" label="Portfolio Link" variant="standard" onChange={e => setUserInput({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } })} value={userInput.personalData.portfolio} />

          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-Course " label="Course Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } })} value={userInput.educationData.course} />
            <TextField id="standard-basic-College " label="College Name" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } })} value={userInput.educationData.college} />
            <TextField id="standard-basic-University" label="University" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } })} value={userInput.educationData.university} />
            <TextField id="standard-basic-year" label="Year Of Passout" variant="standard" onChange={e => setUserInput({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } })} value={userInput.educationData.year} />

          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Work Experience</h3>
          <div className='d-flex row p-3'>
            <TextField id="standard-basic-role" label="Job or Internship" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } })} value={userInput.experience.jobRole} />
            <TextField id="standard-basic-company" label="Company Name" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} value={userInput.experience.comapny} />
            <TextField id="standard-basic-Company location" label="Location" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } })} value={userInput.experience.jobLocation} />
            <TextField id="standard-basic-Company duration" label="Duration" variant="standard" onChange={e => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} value={userInput.experience.duration} />

          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex align-items-center justify-content-between p-3'>
            {/* <TextField sx={{width:'400px'}} id="standard-basic-skill" label="Add Skill" variant="standard" /> */}
            <input ref={userSkillRef} type="text" className="form-control" placeholder='Add Skill' />
            <Button onClick={() => addSkill(userSkillRef.current.value)} variant="text">ADD</Button>
          </div>
          <h1>Suggestions :</h1>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill => (
                <Button onClick={() => addSkill(userSkill)} className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
            }
          </div>
          <h5>Added Skills :</h5>
          <div className="d-flex flex-wrap justify-content-between my-3">
            {/* span must duplicate according to user adding skill. */}
            {
              userInput.skills.length > 0 ?
                userInput.skills.map(skill => (
                  <span key={skill} className='btn btn-primary d-flex align-items-center justify-content-center my-1'>{skill}<button onClick={() => (removeSkill(skill))} className='text-light btn'>X</button> </span>
                ))
                :
                <span>
                  NIL
                </span>
            }
          </div>
        </div>
      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className='d-flex row p-3'>

            <TextField id="standard-basic-name" label="Write a short summary of yourself" multiline rows={4} defaultValue={"Results-driven [Your Profession] with [X] years of experience in [Industry/Key Skills]. Proven track record in [Key Achievement or Responsibility]. Strong skills in [Relevant Skills]. Passionate about [Key Professional Goal or Value]. Seeking to leverage expertise in [Target Role/Industry] to drive success."} variant="standard" onChange={e => setUserInput({ ...userInput, summary: e.target.value })} value={userInput.summary} />


          </div>
        </div>
      )
      default: return null
    }

  }
  // addResume
  const handleAddResume = async() => {
    //  alert('API Called')

    const {name , jobTitle , location} = userInput.personalData
    if (name && jobTitle && location ){
      try{
          const result = await addResumeApi(userInput)
          console.log(result);
          swal('Success','Resume Added Successfully','success')
          setFinish(true)
          
      }catch(err){
              console.log(err);
              setFinish(false)
              swal('Error','Resume Added Failed','error')
              
      }
    }else{
      alert('Fill the form')
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* view of each step */}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {
              activeStep === steps.length - 1 ?
                <button onClick={handleAddResume}>Finish</button> :
                <button onClick={handleNext}>Next</button>
            }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Steps