import React, { useState } from 'react'
import Steps from "../components/Steps"
import Preview from "../components/Preview"


function UserForm() {
  const [userInput, setUserInput] = React.useState({
    personalData: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: ''
    },
    educationData: {
      course: '',
      college: '',
      university: '',
      year: ''
    },
    experience: {
      jobRole: '',
      company: '',
      jobLocation: '',
      duration: ''
    },
    skills: [],
    summary: ''
  })
  const [finish, setFinish] = useState(false)
  return (
    <>
      {
        finish?
        <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
          <Preview userInput={userInput}/>
        </div>
        :
        <div className='container'>
          <div className='row p-5'>
            <div className='col-lg-6'>
              <Steps userInput={userInput} setUserInput={setUserInput} setFinish={setFinish} />
            </div>
            <div className='col-lg-6'>
              <Preview userInput={userInput}  finish={finish}/>
            </div>
          </div>

        </div>
      }
    </>
  )
}

export default UserForm